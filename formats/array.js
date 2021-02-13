/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';

/*
 * @prototype
 */
const colorArrayBase=function(){
    /*
     * @param {array} color
     * @public
     * @return {boolean}
     */
    this.check = function(color){
        return check(color);
    };
    /*
     * @param {array} color
     * @public
     * @return {array}
     */
    this.toArray = function(color){
        return toArray(color);
    };
    /*
     * @param {array} color
     * @public
     * @return {array}
     */
    this.fromArray = function(color){
        return fromArray(color);
    };
    /*
     * @param {array} color
     * @private
     * @return {array}
     */
    const toArray = color => color;
    /*
     * @param {array} color
     * @private
     * @return {array}
     */
    const fromArray = color => color;
    /*
     * @param {array} color
     * @private
     * @return {array}
     */
    const check = (color)=>{
        let length = color.length;
        if( 
            (2 > length)||
            (length > 5 )
        )
            return false;
        for (let i = 0 ; 3 > i ; i++)
            if (
                (0>color[i])||
                (color[i]>255)
            )
                return false;
        return true;
    };
    /*
     * @param {array} color
     * @private
     * @return {array}
     */
    const extend = (color)=>{
        if(color.length === 3 )
            color[3]=1;
        return color;

    };
};

exports.base = colorArrayBase;
