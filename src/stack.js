const { red, bold, yellow, greyBG } = require("@nexssp/ansi");

module.exports.stack = (err, line = 1, topCut = 1) => {
  let stack = new Error(red(err)).stack;
  let arr = stack.split("\n");
  // Remove first line as it this handler
  arr.splice(1, topCut);
  arr[line] = greyBG(bold(yellow(arr[line])));
  // Color the important line
  stack = arr.join("\n");
  console.error(stack);
};
