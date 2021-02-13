/*
 *  @Soldy\poolrc\2021.02.12\GPL3
 */
'use strict';

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
        if(hexCheck(color))
            return 'hex';
        if(hexShortCheck(color))
            return 'hex';
        if(vt100Check(color))
            return 'vt100';
        if(rgbaCheck(color))
            return 'rgba';
        if(rgbCheck(color))
            return 'rgb';
        return 'not supported';
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const hexCheck = function(color){
        let arr = [];
        if (color.length !== 7)
            return false;
        try{
            arr = hexToArray(color);
        }catch(e){
            return false;
        }
        if(
            (arrayCheck(arr)) &&
            (color[0] === '#')
        )
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const hexToArray = function(color){
        let out = [];
        for (let i = 1; 6 > i ; i+=2)
            out.push(
                hexToInteger(
                    color[i],
                    color[i+1]
                )
            );
        return out;
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const hexShortableCheck = function(color){
        if(
            (color[1] === color[2])&&
            (color[3] === color[4])&&
            (color[5] === color[6])
        )
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const hexShortToArray = function(color){
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
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const hexShortCheck = function(color){
        let arr;
        if (color.length !== 4)
            return false;
        try{
            arr = hexShortToArray(color);
        }catch(e){
            return false;
        }
        if(
            (arrayCheck(arr)) &&
            (color[0] === '#')
        )
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const rgbaCheck = function(color){
        let rgbaIn ;
        try{
            rgbaIn = rgbaToRgbaIn(color);
        }catch(e){
            return false;
        }
        if(rgbaInCheck(rgbaIn))
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const rgbaToArray = function(color){
        return rgbaInToArray(
            rgbaToRgbaIn(color)
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const rgbaToRgbaIn = function(color){
        return color.substring(
            5,
            color.length - 1
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const rgbaInCheck = function(color){
        let arr ;
        try{
            arr = rgbaInToArray(color);
        }catch(e){
            return false;
        }
        if(arr.length !== 4)
            return false;
        if(arrayCheck(arr))
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const rgbaInToArray = function(color){
        return color
            .replace(/[,;:]/g, ',')
            .split(',');
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const rgbCheck = function(color){
        let rgbIn;
        try{
            rgbIn = rgbToRgbIn(color);
        }catch(e){
            return false;
        }
        if(rgbInCheck(rgbIn))
            return true;
        return false;

    };
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const rgbToRgbIn = function(color){
        return color.substring(
            4,
            color.length - 1
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const rgbToArray = function(color){
        return rgbInToArray(
            rgbToRgbIn(color)
        );
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const rgbInCheck = function(color){
        let arr; 
        try{
            arr = rgbInToArray(color);
        }catch(e){
            return false;
        }
        if(arrayCheck(arr))
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const rgbInToArray = function(color){
        return color
            .replace(/[.,;:]/g, ',')
            .split(',');
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const vt100Check = function(color){
        let arr = [];
        if (
            (5 > color.length)||
             (color.length > 11)
        )
            return false;
        try{
            arr = vt100ToArray(color);
        }catch(e){
            return false;
        }
        if(arrayCheck(arr))
            return true;
        return false;
    };
    /*
     * @param {string} color
     * @private
     * @return {array}
     */
    const vt100ToArray = function(color){
        return color.split(';');
    };
    /*
     * @param {string} color
     * @private
     * @return {boolean}
     */
    const arrayCheck = function(color){
        const length = color.length;
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
     * @param {array}
     * @private
     * @return {array}
     */
    const arrayExtend = function(color){
        if(color.length === 3 )
            color[3]=1;
        return color;
    };
    /*
     * @param {array}
     * @private
     * @return {integer}
     */
    const arrayToRgba = function(color){
        color = arrayExtend(color);
        return (
            'rgba('+
            color[0],+
            ', '+
            color[1]+
            ', '+
            color[2]+
            ', '+
            color[3]+
            ')'
        );
    };
    /*
     * @param {array}
     * @private
     * @return {integer}
     */
    const arrayToRgb = function(color){
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
     * @param {array}
     * @private
     * @return {string}
     */
    const arrayToHex = function(color){
        let hex = '#';
        for (let i = 0 ; 3 > i ; i++)
            hex += color[i]
                .toString(16);
        return hex;
    };
    /*
     * @param {array}
     * @private
     * @return {integer}
     */
    const arrayToVT100 = function(color){
        return (
            color[0],+
            ';'+
            color[1]+
            ';'+
            color[2]
        );
    };
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
