/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const rgbaIn = new (require('./rgbaIn.js')).base();
/*
 * @prototype
 */
const colorRgbaBase=function(){
    /*
     * @param {string} color
     * @public
     * @return {boolean}
     */
    this.check = function(color){
        return check(color);
    };
    /*
     * @param {string} color
     * @public
     * @return {array}
     */
    this.toArray = function(color){
        return toArray(color);
    };
    /*
     * @param {array} color
     * @public
     * @return {string}
     */
    this.fromArray = function(color){
        return fromArray(color);
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const toArray = color => {
        return rgbaIn.toArray(
            rgbaIn.fromRgb(color)
        );
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color => {
        return (
            'rgba('+
            color[0],+
            ', '+
            color[1]+
            ', '+
            color[2]+
            ')'
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
        if ( 'rgba(' !==  color.substring(0, 5))
            return false;
        let rgbaInVal;
        try{
            rgbaInVal = rgbaIn.fromRgba(color);
        }catch(e){
            return false;
        }
        if(rgbaIn.check(rgbaInVal))
            return true;
        return false;
    };
};

exports.base = colorRgbaBase;

