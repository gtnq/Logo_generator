const inquirier = require("inquirer");
const fs = require("fs");
const { Triangle } = require("./lib/triangle");
const { Circle } = require("./lib/circle");
const { Square } = require("./lib/square");

const questions = [
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
		type: "list",
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
];

function generate(data) {}

function write(data) {}

function init() {
	return inquirier.prompt(questions).then((data) => {
		return data;
	});
}

init()
	.then((userData) => {
		return generate(data);
	})
	.then((text) => {
		write(data);
	});
