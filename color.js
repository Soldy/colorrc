/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';

const array = new (require('./formats/array.js')).base();
const hex = new (require('./formats/hex.js')).base();
const hexShort = new (require('./formats/hexShort.js')).base();
const rgb = new (require('./formats/rgb.js')).base();
const rgbIn = new (require('./formats/rgbIn.js')).base();
const rgba = new (require('./formats/rgba.js')).base();
const rgbaIn = new (require('./formats/rgbaIn.js')).base();
const vt100 = new (require('./formats/vt100.js')).base();
/*
 * @prototype
 */
const colorBase=function(){
    /*
     * @param {string} color
     * @public
     * @return {string} type
     */
    this.check = function(color){
        return check(color);
    };
    /*
     * @param {string||array||integer} color
     * @param {string} type
     * @public
     * @return {string||array||integer} color
     */
    this.to = function(color, type){
        return to(
            color, 
            type
        );
    };
    /*
     * @const {object}
     */
    const types = {
        'array'    : array,
        'hex'      : hex,
        'hexShort' : hexShort,
        'rgb'      : rgb,
        'rgbIn'    : rgbIn,
        'rgba'     : rgba,
        'rgbaIn'   : rgbaIn,
        'vt100'    : vt100
    };
    /*
     * @param {string||array||integer} color
     * @param {string} type
     * @private
     * @return {string} type
     */
    const to = function(color, type){
        if(typeof types[type] === 'undefined')
            return color;
        let inType = check(color);
        if(typeof types[inType] === 'undefined')
            return color;
        return types[type].fromArray(
            types[inType].toArray(
                color
            )
        );

    };
    /*
     * @param {string} color
     * @private
     * @return {string} type
     */
    const check = function(color){
        color = clearTrim(color);
        if(hex.check(color))
            return 'hex';
        if(hexShort.check(color))
            return 'hex';
        if(vt100.check(color))
            return 'vt100';
        if(rgba.check(color))
            return 'rgba';
        if(rgb.check(color))
            return 'rgb';
        return 'not supported';
    };
    /*
     * @param {string}
     * @private
     * @param {string}
    */
    const clearTrim = function(color){
        return color
            .replace(/ /g, '')
            .toLowerCase();
    };
};

 
exports.base = colorBase;
