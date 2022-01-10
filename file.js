const fs = require("fs");
const path = require("path/posix");

const date_time = new Date();
const date = date_time.getDate();
const time = date_time.getTime();

fs.writeFile(`./backup/${date}-${time}.txt`, "" + date_time, (err) => {
  console.log("completed");
});

fs.readdir("./backup", (err, files) => {
  console.log(files);
});

// fs.readFile("./awesome.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// const niceQuote = "Make everyday little less ordinary";
// fs.writeFile("./cool.txt", niceQuote, (err) => {
//   console.log("completed");
// });
// const [, , num] = process.argv;
// const bulkQuote = "Live More worry less";
// for (let i = 0; i < num; i++) {
//   fs.writeFile(`./backup/text-${i + 1}.html`, bulkQuote, (err) => {
//     console.log("completed");
//   });
// }
// fs.readdir("./backup", (err, files) => {
//   for (const file of files) {
//     fs.unlink(path.join("./backup", file), (err) => {
//       console.log("Deleted");
//     });
//   }
// });
