var rsa = require('../index');

var pri_keypair = new rsa.RSAKeyPair(
		// Public exponent extracted from private_key.pem using
		// openssl rsa -inform PEM -text -noout < private_key.pem
		// Or extracted from public key PEM file using
		// openssl rsa -pubin -inform PEM -text -noout < public_key.pem
		"10001",

		// Dummy decryption exponent -- actual value only kept on server.
		"10001",

		// Modulus extracted from private key PEM file using
		// openssl rsa -inform PEM -modulus -noout < private_key.pem
		// Or extracted from public key PEM file using
		// openssl rsa -pubin -inform PEM -modulus -noout < public_key.pem
		"DE3D7D7639DB81D0E920EA7026A6EB47EA1E31F463BE200B54571CA496DCB86DB3D8E54DEC3A8BAF757147635A9785C086FBCB55E14D1E38700120D3F8CB753AD97AEC2F143A13D73937380EFDD2DC210996ADAF666DDB1319060F883EB8E30490C006B30574B48A18424759D996C3FF9454A16695060751C0463D9CA329897BBDB3E8B815BD6E92A0DBAFE4169E8CB624A137AA963F98C27EDE9BBE0ADB7C630D881BD5129D66FA63B68125880EE914CC81910C11FCDB6E7C8F33E8ADB454B6013FBD2C207ABF3F9CDB4B6CFE64438C926D65E75AD145F520591A9103EE88402DBC7BF3DD8CB3F87D4087A8233177CB2ADFF846A7D3BA529DD3AA53FE2AA74B",

		// Key size in bits.
	 	2048
	);

var pub_keypair = new rsa.RSAKeyPair(
		// Public exponent extracted from private_key.pem using
		// openssl rsa -inform PEM -text -noout < private_key.pem
		// Or extracted from public key PEM file using
		// openssl rsa -pubin -inform PEM -text -noout < public_key.pem
		"10001",

		// Dummy decryption exponent -- actual value only kept on server.
		"E5F538D387C6DE5C41B13E71CD8F432A3EF548A47CF53D3FBD73205DA54DC54CCE656323EE393DEE0AA0725F8A82158DB345AD0CB4957D2653A4850464377C940C0C354277AE02D2798105C626320350B68F3B75A46C4540BB8FB7232B46D933D53FD69958EF8319F1AEEA58A1F8746E5248ADC41D9FCE94302971703EFEB4F9254CE463776E1654DAC2B7FC77CE3475A17EBC458861135B81715705C630B40170E30A23289CDDF50BDF35FBD966C6BE6C5D1A8582BA744A6554463A069C022AD347EAB1DDD54B953A4997CD6F38FD92F8CEB326433134AEB1DDF727BB33EC296B66CFF6AD8556E0522B4CEB403EA9DB2C16EC8190769747C0CC2CB348E9536B",

		// Modulus extracted from private key PEM file using
		// openssl rsa -inform PEM -modulus -noout < private_key.pem
		// Or extracted from public key PEM file using
		// openssl rsa -pubin -inform PEM -modulus -noout < public_key.pem
		"10001",

		// Key size in bits.
	 	2048
	);


global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer(str, 'binary').toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString('binary');
    };
}

var ciphertext = rsa.encryptedString(pri_keypair, 'type',
		rsa.RSAAPP.PKCS1Padding, rsa.RSAAPP.RawEncoding);
	// ciphertext is a string composed of the raw binary data. base-64 encode it.
	console.log('Encrypted String:  ' + btoa(ciphertext));

	var plainttext = rsa.decryptedString(pub_keypair, ciphertext)
	console.log('Decrypted String: ' + plainttext)

