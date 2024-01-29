import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function createHash(password) {
  const salt = randomBytes(16).toString('hex');

  const hashPass = scryptSync(password, salt, 64).toString('hex');

  return `${hashPass}:${salt}`;
}

class User {
  constructor(name, password) {
    this.name = name;
    [this.hash, this.salt] = createHash(password).split(':');
  }

  autheticate(name, password) {
    if (name === this.name) {
      const hashTest = Buffer.from(scryptSync(password, this.salt, 64), 'hex');
      const realHash = Buffer.from(this.hash, 'hex');

      const equalHashes = timingSafeEqual(hashTest, realHash);

      if (equalHashes) {
        console.log('User authenticated successfully.');
        return true;
      }
    }
    console.log('User name or password doesn´t match.');
    return false;
  }
}

const user = new User('Matheus', '432');

user.autheticate('Matheus', '432');
user.autheticate('Matheu', '432');
user.autheticate('Matheus', '43');
