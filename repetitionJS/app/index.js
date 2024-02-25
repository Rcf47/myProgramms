const methodArr = require("../models/js-model/methodsModel.js");
const getRandString = require("../controller/getRandString.js");
const getOrderString = require("../controller/getOrderString.js");
const validArguments = require("./validArguments.js");

const args = process.argv.slice(2);
const keys = Object.keys(validArguments);
const values = Object.values(validArguments);

if (args.length > 2) {
  throw new Error("Too much arguments");
}
switch (args[0]) {
  case keys[0]:
    getRandString(methodArr);
    break;
  case values[0]:
    getRandString(methodArr);
    break;
  case keys[1]:
    getOrderString(methodArr);
    break;
  case values[1]:
    getOrderString(methodArr);
    break;
  default:
    getOrderString(methodArr);
}
