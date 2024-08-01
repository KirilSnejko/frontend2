// 1

// function encrypt(string, key) {
//   let encryptString = '';
//   for (let i=0; i<string.length; i++) {
//     const utf16 = string.charCodeAt(i) + key;
//     const encryptedItem = String.fromCharCode(utf16)
//     encryptString += encryptedItem;
//   }
//   return encryptString;
// }

// const encryptedString = encrypt('Hello, World!',3);
// console.log(encryptedString);

// function decrypt(string, key) {
//   let decryptedString = '';
//   for (let i=0; i<string.length; i++) {
//     const utf16 = string.charCodeAt(i) - key;
//     const encryptedItem = String.fromCharCode(utf16)
//     decryptedString += encryptedItem;
//   }
//   return decryptedString;
// }

// const decryptedString = decrypt(encryptedString, 3)
// console.log(decryptedString);

//   2

// const encrypt = (str, key) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     const shift = (key + i) % 256;
//     const charCode = (str.charCodeAt(i) + shift) % 256;
//     result += String.fromCharCode(charCode);
//   }
//   return result;
// }

// const decrypt = (str, key) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     const shift = (key + i) % 256;
//     const charCode = (str.charCodeAt(i) - shift + 256) % 256;
//     result += String.fromCharCode(charCode);
//   }
//   return result;
// }

// const originalText = "Hello, World!";
// console.log("Original text:", originalText);
// const key = 7;

// const encryptedText = encrypt(originalText, key);
// console.log("Encrypted:", encryptedText);

// const decryptedText = decrypt(encryptedText, key);
// console.log("Decrypted:", decryptedText);

// 3

// function generatePasswords(passwordLength) {
//   const numbers = "0123456789";
//   const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   const symbols = "!@#$%^&*()_+";
//   const allChars = numbers + letters + symbols;

//   let randomPassword = "";

//   for (let i = 0; i < passwordLength; i++) {
//     let randomChar = Math.floor(Math.random() * allChars.length)
//     randomPassword += allChars[randomChar]
//   }
//   console.log(randomPassword);
// }

// generatePasswords(8)

// 4

// function generatePasswords(passwordLength, includeNumbers = true, includeLetters = true, includeSymbols = true) {
//   const numbers = "0123456789";
//   const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   const symbols = "!@#$%^&*()_+";
//   let allChars = "";

//   if (includeNumbers) allChars += numbers;
//   if (includeLetters) allChars += letters;
//   if (includeSymbols) allChars += symbols;

//   let randomPassword = "";

//   for (let i = 0; i < passwordLength; i++) {
//     let randomCharIndex = Math.floor(Math.random() * allChars.length);
//     randomPassword += allChars[randomCharIndex];
//   }

//   console.log(randomPassword);
// }

// generatePasswords(8, true, true, false);
// generatePasswords(12, false, true, true);
// generatePasswords(6, true, false, false);

// 5

// function calculateString(string) {
//   const result = eval(string)
//   console.log(result);
// }

// calculateString('3 + 5 * (2 - 8)')
