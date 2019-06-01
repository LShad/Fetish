var CryptoJS = require("crypto-js");
const a = 12
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(a.toString(), 'secret key 123').toString();
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123').toString(CryptoJS.enc.Utf8);
var plaintext = bytes
 
console.log(plaintext);