const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Akshat Saraswat',
    age: 50,
    gender: 'Male',
    address: '13, Mandawali Main Rd, I.P.Extension, Patparganj, Delhi, 110092',
    contact_number: 1234567890,
    email: 'akshat@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jai Kumar',
    age: 31,
    gender: 'Male',
    address: '13, Mandawali Main Rd, I.P.Extension, Patparganj, Delhi, 110092',
    contact_number: 2345678910,
    email: 'jai@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kapish Garg',
    age: 89,
    gender: 'Male',
    address: '13, Mandawali Main Rd, I.P.Extension, Patparganj, Delhi, 110092',
    contact_number: 9998887777,
    email: 'kapish@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rhythm',
    age: 20,
    gender: 'Female',
    address: '13, Mandawali Main Rd, I.P.Extension, Patparganj, Delhi, 110092',
    contact_number: 1235555789,
    email: 'rhythm@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ayush Mishra',
    age: 24,
    gender: 'Male',
    address: '13, Mandawali Main Rd, I.P.Extension, Patparganj, Delhi, 110092',
    contact_number: 1111000222,
    email: 'ayush@test.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

module.exports = users