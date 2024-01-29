import { createHash } from 'crypto';

function hashCreator(data, strategy) {
  return createHash(strategy).update(data).digest('hex');
}

const commonPass = [
  'senha',
  '123456',
  'senha123',
  'admin',
  'senha123456',
  '1234',
  'blink182',
  'meuAniversario',
  'senha123456',
  'brasil',
  '102030',
];

const rainbowTable = commonPass.map((pass) => {
  return [pass, hashCreator(pass, 'MD5')];
});

const commonHashes = [
  '21232f297a57a5a743894a0e4a801fc3',
  'cedf5ab7b5c5852b3ed35d7dbe3c3835',
  '81dc9bdb52d04dc20036dbd8313ed055',
];

commonHashes.map((cHash) => {
  rainbowTable.map((generatedPair) => {
    if (cHash === generatedPair[1]) {
      console.log(`Pass found: hash ${cHash} is equivalent to ${generatedPair[0]}`);
    }
  });
});

