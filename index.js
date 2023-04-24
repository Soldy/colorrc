'use strict';

if(typeof  global.theUn1v3rse === 'undefined')
    require('theuniverse');
const $universe = global.theUn1v3rse.controls.interface();

if(!$universe.baseCheck('colorrc'))
    $universe.baseAdd(
        'colorrc', 
        (new (require('./color.js')).base())
    );

exports.base = $universe.baseGet('colorrc');
