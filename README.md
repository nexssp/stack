# @nexssp/stack

Display stack in nice way with colors and removes the very first line from stack.

## Installation

```sh
npm i @nexssp/stack
```

![image](https://user-images.githubusercontent.com/53263666/116808538-a2569180-ab39-11eb-88d1-5dc9ed16ebb2.png)

## Usage

```js
const { stack } = require("stack");

// OR

const mystack = require("@nexssp/stack").stack;

require("module-alias/register");
const { stack } = require("@nexssp/stack");

stack("My Error test with nice stack");

stack("Display of the stack can be adjusted ('message',1,4)", 1, 3);
//Where 2 is which one number to colorize. Default is 1. 3 is cut line from the top, so it will cut 3 lines.
```
