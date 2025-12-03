let password = "";
const defaultString = "Generated Password: ";

function generatePassword(length){
    password = "";
    if (typeof length != 'number'){
        password = "Error: Please enter a valid numerical value.";
        return;
    }
    if (length < 12 || length > 20){
        password = "Error: Password length must be between 12 and 20 characters.";
        return;
    }
    const passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    for(let i = 0; i<length; i++){
        let index = Math.random() * passwordCharacters.length;
        index = Math.trunc(index);
        password += passwordCharacters[index];
    }
    return password;
}

generatePassword(0);
console.log(defaultString + password)

generatePassword(12);
console.log(defaultString + password)

generatePassword(25);
console.log(defaultString + password)

generatePassword(20);
console.log(defaultString + password)

generatePassword("spaghetti");
console.log(defaultString + password)

generatePassword(13);
console.log(defaultString + password)

generatePassword(15);
console.log(defaultString + password)

generatePassword(null);
console.log(defaultString + password)