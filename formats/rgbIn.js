/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const array = new (require('./array.js')).base();
/*
 * @prototype
 */
const colorRgbInBase=function(){
    /*
     * @param {string} color
     * @public
     * @return {boolean}
     */
    this.check = function(color){
        return check(color);
    };
    this.toArray = function(color){
        return toArray(color);
    };
    this.fromArray = function(color){
        return fromArray(color);
    };
    /*
     * @param {string} color
     * @public
     * @return {string}
     */
    this.fromRgb = function(color){
        return fromRgb(color);
    };
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const fromRgb = function(color){
        return color.substring(
            4,
            color.length - 1
        );
    };
    const toArray = color =>{
        return color
            .replace(/[.,;:]/g, ',')
            .split(',');
    };
    const fromArray = color =>{
        return (
            color[0],+
            ', '+
            color[1]+
            ', '+
            color[2]
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
        let arr; 
        try{
            arr = toArray(color);
        }catch(e){
            return false;
        }
        if(array.check(arr))
            return true;
        return false;
    };
};

exports.base = colorRgbInBase;

