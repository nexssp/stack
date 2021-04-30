# @nexssp/stack

Display stack in nice way with colors and removes the very first line from stack.

## Installation

```sh
npm i @nexssp/stack
```

![image](https://user-images.githubusercontent.com/8799218/116674813-65599600-a9a5-11eb-933f-405494431e0f.png)

## Usage

```js
const { stack } = require("stack");

// OR

const mystack = require("@nexssp/stack").stack;

mystack("my message", 2); //Where 2 is which one number to colorize. Default is 1.
```
