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
            .replace(/ /g, '');
    };
};

 
exports.base = colorBase;
