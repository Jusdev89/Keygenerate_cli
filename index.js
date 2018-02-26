const keythereum = require('keythereum');
const ethUtil = require('ethereumjs-util');
const qr = require('qr-image');
const pictureTube = require('picture-tube');

const tube = pictureTube();
tube.pipe(process.stdout);

const privateKeyBuffer = keythereum.create().privateKey;
const addressBuffer = ethUtil.privateToAddress(privateKeyBuffer);

const privateKey = `0x${privateKeyBuffer.toString('hex')}`;
const address = `0x${addressBuffer.toString('hex')}`;

process.stdout.write(
`
Generated Keypair
-----------------

Address: ${address}
Private_Key: ${privateKey}

`
);

qr.image(address, {type: 'png', size: 1, margin: 2,}).pipe(tube);
