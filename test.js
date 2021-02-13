const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const colorrc = new (require('./index.js')).base();
nanoTest.add(
    'hex short check',
    {
        'function':colorrc.check,
        'options':['#fff']
    },
    '===',
    'hex'
);

nanoTest.add(
    'hex check',
    {
        'function':colorrc.check,
        'options':['#aaaaaa']
    },
    '===',
    'hex'
);


nanoTest.add(
    'rgb check',
    {
        'function':colorrc.check,
        'options':['rgb(255,14,5)']
    },
    '===',
    'rgb'
);



nanoTest.add(
    'rgba check',
    {
        'function':colorrc.check,
        'options':['rgb(255,14,5,0.1)']
    },
    '===',
    'rgba'
);

nanoTest.add(
    'rgba check with space',
    {
        'function':colorrc.check,
        'options':['rgb ( 255, 14,5,0.1 )']
    },
    '===',
    'rgba'
);

nanoTest.add(
    'vt100 check',
    {
        'function':colorrc.check,
        'options':['4;65;214']
    },
    '===',
    'vt100'
);


nanoTest.run();
