import { createHash } from 'crypto';

function hashCretor(password) {
  return createHash('sha256').update(password).digest('hex');
}

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = hashCretor(password);
  }

  autenthicate(name, password) {
    if (name === this.name && this.hash === hashCretor(password)) {
      console.log('User authenticated successfully.');
      return true;
    } else {
      console.log('Name or password doesn´t match.');
      return false;
    }
  }
}

const user = new User('Matheus', '432');

console.log(user);

user.autenthicate('Matheus', '543');
user.autenthicate('Matheus', '432');
