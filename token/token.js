import jwt from 'jsonwebtoken';

const secretKey = 'supersecretkey';

const token = jwt.sign(
  {
    nick: 'matheus',
    course: 'cripto and tokens',
  },
  secretKey
);

console.log(token);

const decodifiedToken = jwt.verify(token, secretKey);

console.log(decodifiedToken);