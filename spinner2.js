let spinChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;
for (const char of spinChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
};
