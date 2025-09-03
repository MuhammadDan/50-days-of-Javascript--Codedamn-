import jwt from 'jsonwebtoken';
// ye line jsonwebtoken library ko import kar rahi hai. Ye JWT banane, verify karnai aur decode karnai kai lyai use hoti hai
// Note: Ye syntax tab kaam karta hai jab type: "module" ho package.json mein.


console.log('JWT Lab');

// Create Payload
const payload = {
    username: 'codedamn'
};
// ye payload hai -yani wo data jo hum JW kai ander embed karna chahtai hain
// yahn sirf username diya gaya hai,lekin tum userId, role, ya aur bhi fields daal saktai ho

// Secret Key to encode the payload
const secretKey = '1p2reHPIBzehk9W4VdELvz6Y3HZ6m2VX';
// ye secret key hai jo JWT ko sign karnai ke liyai use hoti hai.Ye key server ke paas hi honi chahiye-client ko kabhi expose nahi karni.

// JWT method to generate a Hashed Token
const token = jwt.sign(payload, secretKey);
console.log('Token:', token);

//➡️ Ye line JWT generate kar rahi hai.
//- payload andar jaata hai
//- secretKey se sign hota hai
// Result: ek encrypted token milta hai jo tamper-proof hota hai.


// Decode Payload
const decodedPayload = jwt.decode(token);
// ye line ko decode karti hai bina verify kiye. Yani ye bas payload nikaalti hai likn ye check
// nahi karti ke token valid hai ya nahi
console.log('Decoded Payload:', decodedPayload);

// Verify the Token and Decode Payload
const verified = jwt.verify(token, secretKey);
// ye line token ko verify karti hai using secretKey. Ager token valid hai (tamper nahi hua,expire nahi hua),to ye payload eun karta hai
console.log('Verified:', verified);

export { token, decodedPayload, verified };
// ye line token,decodedPayload au verified ko export kar rahi hai taake ye ksi au file mein 
// import kiy jaa sakein.