const keythereum = require('keythereum');
const qr = require('qr-image');
const pictureTube = require('picture-tube');

const tube = pictureTube();
tube.pipe(process.stdout);

const privateKeyBuffer = keythereum.create().privateKey;
const addressKey = keythereum.privateKeyToAddress(privateKeyBuffer);
const privateKey = `0x${privateKeyBuffer.toString('hex')}`;

process.stdout.write(
`
Generated Keypair
-----------------

Address: ${addressKey}
Private_Key: ${privateKey}

`
);

qr.image(addressKey, {type: 'png', size: 1, margin: 2,}).pipe(tube);
