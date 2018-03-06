# RSA in JavaScript (UMD)

test:
  
```
    npm run test-init
    
    
    npm run test-en
    
    
    npm run test-de
```
    
    
usage:
    Find in `test/test.js`
    


## Creating and managing keys


Creating a new keypair: To create a new 2048-bit keypair from a command-line interpreter such as bash, use this command:

`openssl genrsa -out private_key.pem 2048`

This prints out all key components as hexadecimal numbers. `openssl rsa -inform PEM -text -noout < private_key.pem`

The component called "publicExponent" is what you're looking for, and by default it has the value 0x10001:

`publicExponent: 65537 (0x10001)`

The hex value, e.g. "10001", is provided to the JavaScript library without the leading "0x". The other numbers, such as the modulus, are formatted in a way that delimits each byte with a colon. However, there is a different flag that prints the modulus only, without the colons:

`openssl rsa -inform PEM -modulus -noout < private_key.pem`

After removing the "Modulus=" prefix, the rest of the value can be directly used by the JavaScript library, as you can see in the source for this webpage.


origin: http://www.ohdave.com/rsa/
