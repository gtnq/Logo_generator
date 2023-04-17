const inquirier = require("inquirer");
const fs = require("fs");
const { Triangle } = require("./lib/triangle");
const { Circle } = require("./lib/circle");
const { Square } = require("./lib/square");

function write(answers) {}

function prompt() {
	inquirier.prompt([
		{
			type: "input",
			name: "logo",
			message: "What text do you want on your Logo?",
			validate: (logo) => {
				if (logo) {
					return true;
				} else {
					console.log("need something special on your LOGO");
				}
			},
		},
		{
            //test
        },
	]);
}
