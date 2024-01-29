import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const message = 'Demonstration';
const key = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes256', key, iv);

const cipherMessage =
  cifra.update(message, 'utf-8', 'hex') + cifra.final('hex');

console.log(cipherMessage);

const decipher = createDecipheriv('aes256', key, iv);

const decipherMessage =
  decipher.update(cipherMessage, 'hex','utf-8') + decipher.final('utf-8');

console.log(decipherMessage);
