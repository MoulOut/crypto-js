import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

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

const encryptedData = publicEncrypt(publicKey, Buffer.from('secret message'));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey,encryptedData);

console.log(decryptedData.toString('utf-8'));