const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '1234abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// });

let hashedPassword = '$2a$10$PNJUZkpKCw.7z.ZF6G1AZO9un2NtFImgQBle6vexzcGIfk94pLtMa';

bcrypt.compare(password, hashedPassword, (err, res)=>{
    console.log(res)
});

// let data = {
//     id: 5
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
// let decoded = jwt.verify(token, '123abc');
// console.log('decoded',decoded);

// let message = 'I am amin';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some amin').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'some amin').toString();
//
// if (resultHash === token.hash) {
//     console.log('data was not changed')
// } else {
//     console.log('data was changed. do not trust')
// }