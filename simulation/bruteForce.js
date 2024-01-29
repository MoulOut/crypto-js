import { createHash } from 'crypto';

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = this.hashCretor(password);
  }

  hashCretor(password) {
    return createHash('sha256').update(password).digest('hex');
  }

  autenthicate(name, password) {
    if (name === this.name && this.hash === this.hashCretor(password)) {
      console.log('User authenticated successfully.');
      return true;
    } else {
      return false;
    }
  }
}

const user = new User('Matheus', '432');

for(let testPass =0 ; testPass < 10000 ; testPass++){
    if (user.autenthicate('Matheus',testPass.toString())){
        console.log(`A senha do usuario é ${testPass}`);
    }
}