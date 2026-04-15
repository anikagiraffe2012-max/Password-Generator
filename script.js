const passwordField = document.getElementById('passwordField');
const copyBtn = document.getElementById('copyBtn');
const lengthInput = document.getElementById('length');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
    let allowedChars = '';
    let password = '';

    if (uppercaseCheck.checked) allowedChars += uppercaseChars;
    if (lowercaseCheck.checked) allowedChars += lowercaseChars;
    if (numbersCheck.checked) allowedChars += numberChars;
    if (symbolsCheck.checked) allowedChars += symbolChars;

    if (allowedChars === '') {
        return 'Select at least one option!';
    }

    const length = parseInt(lengthInput.value);
    
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
    }
    return password;
}

function updatePassword() {
    const newPassword = generatePassword();
    passwordField.value = newPassword;
}

function copyPassword() {
    passwordField.select();         
    navigator.clipboard.writeText(passwordField.value);
    alert('Password copied to clipboard!');
}

generateBtn.addEventListener('click', updatePassword);
copyBtn.addEventListener('click', copyPassword);

updatePassword();


