/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const array = new (require('./array.js')).base();
/*
 * @prototype
 */
const colorVT100Base=function(){
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
    const toArray = color =>{
        return color.split(';');
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color =>{
        return (
            color[0],+
            ';'+
            color[1]+
            ';'+
            color[2]
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
        let arr = [];
        if (
            (5 > color.length)||
             (color.length > 11)
        )
            return false;
        try{
            arr = toArray(color);
        }catch(e){
            return false;
        }
        if(arr.length !== 3)
             return false;
        if(array.check(arr))
            return true;
        return false;
    }
}

exports.base = colorVT100Base;
