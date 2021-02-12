const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const colorrc = new (require('./index.js')).base();
nanoTest.add(
    'hex short',
    {
        'function':colorrc.check,
        'options':['#fff']
    },
    '===',
    'hex'
);

nanoTest.add(
    'hex',
    {
        'function':colorrc.check,
        'options':['#aaaaaa']
    },
    '===',
    'hex'
);


nanoTest.add(
    'rgb',
    {
        'function':colorrc.check,
        'options':['rgb(255,14,5)']
    },
    '===',
    'rgb'
);



nanoTest.add(
    'rgba',
    {
        'function':colorrc.check,
        'options':['rgb(255,14,5,0.1)']
    },
    '===',
    'rgba'
);

nanoTest.run();
