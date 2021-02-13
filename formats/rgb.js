/*
 *  @Soldy\colorc\2021.02.13\GPL3
 */
'use strict';
const rgbIn = new (require('./rgbIn.js')).base();
/*
 * @prototype
 */
const colorRgbBase=function(){
    /*
     * @param {string} color
     * @public
     * @return {boolean}
     */
    this.check = function(color){
        return check(color);
    }
    /*
     * @param {string} color
     * @public
     * @return {array}
     */
    this.toArray = function(color){
        return toArray(color);
    }
    /*
     * @param {array} color
     * @public
     * @return {string}
     */
    this.fromArray = function(color){
        return fromArray(color);
    }
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const toArray = color => {
        return rgbIn.toArray(
            rgbIn.fromRgb(color)
        );
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color => {
        return (
            'rgb('+
            color[0],+
            ', '+
            color[1]+
            ', '+
            color[2]+
            ')'
        );
    }
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
        if ( 'rgb(' !==  color.substring(0, 4))
            return false;
        let rgbInVal;
        try{
            rgbInVal = rgbIn.fromRgb(color);
        }catch(e){
            return false;
        }
        if(rgbIn.check(rgbInVal))
            return true;
        return false;
    }
}

exports.base = colorRgbBase;

