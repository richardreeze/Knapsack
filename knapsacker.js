const fs = require('fs');

// console.log(process.argv);
const args = process.argv.slice(2);
// console.log("here is args:", args);

if (args.length < 2) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = `./data/${args[0]}`;

// !!!! IMPLEMENT ME

// Read file
const text = fs.readFileSync(filename, 'utf8');
const RegExTest = /\d+ (\d+) (\d+)/g

// if (text) {
//   console.log(text.split('\r\n'));
// }
const found = text.match(RegExTest);

console.log("here is found:", found);

found.forEach(num => {
  test = RegExTest.exec(num);
  console.log(test)
});

