function maskEmail(email = "exampleEmail@abc.com"){
    const atSymbol = email.indexOf('@'); //finds the index that the @ is located
    const emailLength = email.length;
    let tempName = email.slice(0, atSymbol); //shallow copies the users full name before the @ symbol
    let tempAddress = email.slice(atSymbol, emailLength); //shallow copies the ending address of the email
    const charCount = tempName.length - 1;
    let mask = '*';
    console.log(tempName);
    console.log(tempAddress);
    email = email.slice(0,1) + mask.repeat(charCount) + tempAddress;
    console.log(email);
}
maskEmail();
maskEmail("josh.ortiz@gmail.com");
maskEmail("apple.pie@example.com");
maskEmail("info@test.dev");
maskEmail("user@domain.org");