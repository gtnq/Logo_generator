const inquirier = require("inquirer");
const fs = require("fs");
const { Triangle } = require("./lib/triangle");
const { Circle } = require("./lib/circle");
const { Square } = require("./lib/square");

const questions = [
	{
		type: "input",
		name: "text",
		message: "What text do you want on your Logo?",
		validate: (text) => {
			if (text) {
				return true;
			} else {
				console.log("need something special on your LOGO");
			}
		},
	},
	{
		type: "input",
		name: "text_color",
		message: "What color do you want for your text?",
		validate: (text_color) => {
			if (text_color) {
				return true;
			} else {
				console.log("Give me a color for the text please");
			}
		},
	},
	{
		type: "list",
		name: "logo",
		message: "Pick your shape for the logo",
		choices: ["Triangle", "Square", "Circle"],
	},
	{
		type: "input",
		name: "color",
		message: "What color do you want for your logo?",
		validate: (color) => {
			if (color) {
				return true;
			} else {
				console.log("Give me a color for the logo please");
			}
		},
	},
];

function generate(data) {
	let string = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
	let text = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.text_color}">${data.text}</text>`;
	string += `<g>`;
	string += `${data.logo}`;
	let shape;
	switch (data.logo) {
		case "Triangle":
			shape = new Triangle(data.color);
			string += shape.render();
			break;
		case "Circle":
			shape = new Circle(data.color);
			string += shape.render();
			break;
		case "Square":
			shape = new Square(data.color);
			string += shape.render();
			break;
	}

	string += text;
	string += `</g></svg>`;

	write(string, data);
}

function write(string, data) {
	let filename = `${data.text}_${data.text_color}.svg`;
	fs.writeFile(`./exp/${filename}`, string, (err) => console.log(err));
}

function init() {
	return inquirier.prompt(questions).then((data) => {
		return data;
	});
}

init().then((userData) => {
	console.log(userData);
	return generate(userData);
});
