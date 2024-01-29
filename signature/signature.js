import { log } from 'console';
import { generateKeyPairSync, createSign, createVerify } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

let data = 'String going to be signed';

const signer = createSign('rsa-sha256');

signer.update(data);

const signature = signer.sign(privateKey, 'hex');

console.log(signature);

// intercepted data
// data += 'altered data';
//
const verifier = createVerify('rsa-sha256');

verifier.update(data);

const verified = verifier.verify(publicKey, signature, 'hex');

log(verified);
