const keythereum = require('keythereum')
const ethUtil = require('ethereumjs-util')

const privateKeyBuffer = keythereum.create().privateKey;
const addressBuffer = ethUtil.privateToAddress(privateKeyBuffer);

const privateKey = `0x${privateKeyBuffer.toString('hex')}`
const address = `0x${addressBuffer.toString('hex')}`

process.stdout.write(
`
Generated Keypair
-----------------

Address: ${address}
Private_Key: ${privateKey}

`
)
