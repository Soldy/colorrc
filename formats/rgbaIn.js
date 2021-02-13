/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const array = new (require('./array.js')).base();
/*
 * @prototype
 */
const colorRgbaInBase=function(){
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
     * @return {boolean}
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
     * @public
     * @return {string}
     */
    this.fromRgba = function(color){
        return fromRgba(color);
    };
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const fromRgba = function(color){
        return color.substring(
            5,
            color.length - 1
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const toArray = color =>{
        return color
            .replace(/[,;:]/g, ',')
            .split(',');
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color =>{
        return (
            color[0],+
            ', '+
            color[1]+
            ', '+
            color[2]+
            ', '+
            color[3]
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

exports.base = colorRgbaInBase;
