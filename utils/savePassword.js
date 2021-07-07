const path = require("path");
const fs = require("fs");
const os = require("os");
const log = console.log;
const chalk = require("chalk");

const savePassword = (password) => {
	fs.open(path.join(__dirname, "../", "password.txt"), "a", 666, (err, id) => {
		fs.write(id, password + os.EOL, null, "utf-8", () => {
			fs.close(id, () => {
				log(chalk.redBright("Password saved to file password.txt"));
			});
		});
	});
};

module.exports = savePassword;
