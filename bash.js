const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.includes("cat")) {
    const fileName = cmd.split(" ")[1];
    cat(fileName);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
