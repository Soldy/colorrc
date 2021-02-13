/*
 *  @Soldy\colorrc\2021.02.13\GPL3
 */
'use strict';
const array = new (require('./array.js')).base();
/*
 * @prototype
 */
const colorHslBase=function(){
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
    const toArray = color =>{
        let arr = color.split(',');
        let H = arr[0] / 60;
        let S = arr[1] / 100;
        let V = arr[2] / 100;
        let Hn = Math.round(H) % 6;
        let f = H - Math.round(H);
        let I = 255 * V * (1 - S);
        let E = 255 * V * (1 - (S * f));
        let X = 255 * V * (1 - (S * (1 - f)));
        let C = V * 255;
        if(1 > Hn)
            return [C, X, I];
        if(2 > Hn)
            return [E, C, I];
        if(3 > Hn)
            return [I, C, X];
        if(4 > Hn)
            return [I, E, C];
        if(5 > Hn)
            return [X, I, C];
        return [C, I, E];
    };
    /*
     * @param {array} color
     * @private
     * @return {string}
     */
    const fromArray = color =>{
        return ;
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const check = (color)=>{
    };
};

exports.base = colorHslBase;
