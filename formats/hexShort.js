/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const array = new (require('./array.js')).base();
/*
 * @prototype
 */
const colorHexShortBase=function(){
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
     * @return {boolean}
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
    const toArray = color =>{
        let out = [];
        for (let i = 1; 6 > i ; i+=2)
            out.push(
                hexToInteger(
                    color[i],
                    color[i]
                )
            );
        return out;
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color =>{
        let hex = '#';
        for (let i = 0 ; 3 > i ; i++)
            hex += Math.round(color[i]/16)
                .toString(16);
        return hex;
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
        let arr;
        if (color.length !== 4)
            return false;
        try{
            arr = toArray(color);
        }catch(e){
            return false;
        }
        if(
            (array.check(arr)) &&
            (color[0] === '#')
        )
            return true;
        return false;
    }
    /*
     * @param {array}
     * @private
     * @return {integer}
     */
    const hexToInteger = function(...a){
        let hex = '0x';
        for(let i of a)
            hex+=i;
        return parseInt(hex);
    };
}

exports.base = colorHexShortBase;
