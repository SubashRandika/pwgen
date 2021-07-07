const { program } = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utils/createPassword");

program.version("1.0.0").description("Simple command line password generator");

program
	.option("-l, --length <NUMBER>", "Length of the password", 8)
	.option("-s, --save", "Save password to password.txt file")
	.option("-nn, --no-numbers", "Exclude numbers from password")
	.option("-ns, --no-symbols", "Exclude symbols from password")
	.parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);
clipboardy.writeSync(generatedPassword);

log(chalk.blue("Generated password:", chalk.cyanBright.bold(generatedPassword)));
log(chalk.yellow("Password copied to clipboard. You can past using (Ctrl + v)"));
