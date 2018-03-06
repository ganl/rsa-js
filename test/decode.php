<?php


// Encryption exponent and modulus generated via
// openssl genrsa -out private_key.pem 2048
$private_key = openssl_pkey_get_private('file://'.dirname(__FILE__).'/private_key.pem'); // or  openssl_pkey_get_private(file_get_contents('private_key.pem'))

// ciphertext generated by JavaScript uses PKCS1 padding, emitted as base64 string...
$ciphertext = 'wGbjuNFM/Ax08KUgdK5U1Ry0/EO8X+XiiLSUeativzSDplwNr+E6H0ieHVfslLry+wAt8keJauSUJVp0Xmo3JzFV2G7mSVpUHqkWFxcBlRpVDmkI75CDb4gfqbZ7O9vawT0K1t8lXqfLp0BYTVhBaPmPkIgurBQV/iN0fMBeZ38KyWKn5AUIR14jHGhumV9DbQgpdudP7mZQUBU1Xlod5dtIeNM3tBwPrOAdZL4el+5sanN6nyYdF7Dw1H/nMVrWyk4PX9wCjIHtLNHTN7SVw0qaJWTcYp4c5qFow1f6Fb4HiZRWMtamvIVGYa3Y1lU7y7fHd41OvzaW7jh8Q53CMw==';

// ...convert to binary.
$bin_ciphertext = base64_decode($ciphertext);

openssl_private_decrypt($bin_ciphertext, $plaintext, $private_key, OPENSSL_PKCS1_PADDING)
	or die("openssl_private_decrypt failed.");

	var_dump($plaintext);

