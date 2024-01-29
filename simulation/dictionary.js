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

const user = new User('Matheus', 'pass123');

const commonPass = ['pass','pass123','pass23','admin','0123','aniversary'];

commonPass.map((pass => {
  if(user.autenthicate('Matheus',pass)){
    console.log(`user password is ${pass}`);
  }
}))
