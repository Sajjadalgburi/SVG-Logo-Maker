const inquirer = require("inquirer");
const fs = require("fs");
const generatedLogoContent = require("./util/generatedLogoContent.js");

const listOptions = ["Circle", "Triangle", "Square"];

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: listOptions,
    },
    {
      type: "input",
      name: "textContent",
      message: "Enter text content for your shape!",
      validate: function (input) {
        if (/[^a-zA-Z0-9\s]/.test(input)) {
          return "Input cannot contain special characters.";
        } else if (input.trim() !== "") {
          return true;
        }
        return "Please enter a text...";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword (OR a hexadecimal number)",
      validate: function (input) {
        if (/[^a-zA-Z0-9#\s]/.test(input)) {
          return "Invalid color input...";
        } else if (input.trim() !== "") {
          return true;
        }
        return "Please enter a text...";
      },
    },
  ])
  .then((answers) => {
    const LogoContent = generatedLogoContent(answers);
    fs.writeFile("logo.svg", LogoContent, (err) => {
      err ? console.error(err) : console.log("Generated logo.svg");
    });
  });
