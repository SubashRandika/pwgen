const alpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~}{[]:;?/-=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
	let chars = alpha.concat(alpha.toUpperCase());
	chars = hasNumbers ? chars.concat(numbers) : chars;
	chars = hasSymbols ? chars.concat(symbols) : chars;

	return generatedPassword(length, chars);
};

const generatedPassword = (length, chars) => {
	let password = "";

	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return password;
};

module.exports = createPassword;
