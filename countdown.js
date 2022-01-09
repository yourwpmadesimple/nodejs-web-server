#!/usr/bin/env node

const parseArgs = require("minimist");
const { stdout: log } = require("single-line-log");
const Timer = require("tiny-timer");
const { time } = parseArgs(process.argv);

if (!time) {
  throw new Error("--time is required");
}

if (!parseInt(time)) {
  throw new Error("--time must be a number");
}

const count = parseInt(time);
let message = "";

for (let i = 0; i < count; i++) {
  message += "*";
}

// setTimeout(() => {
//   log("overwrites line");
// }, 2000);

const timer = new Timer({ interval: 1000 });

timer.on("tick", () => {
  log(message);
  message = message.slice(1);
});

timer.start(count * 1000);

//
// Collect the time from argv
//

//
// Print stars inline
//

//
// Run timer and remove stars
//
