import fs from "fs";
import path from "path";
// const fs = require("fs");
// const path = require("path/posix");

// destructuring the path we get from command line
const [, , dirPath] = process.argv;

// readdir reads the entire directory given to it.
fs.readdir(dirPath, (err, files) => {
  console.log(files);
  // reading all the files
  files.forEach((file) => {
    // we exract the path of the file using the extname function
    console.log(`Type of the File: ${path.extname(file)}`);
    // reading the data in the file
    fs.readFile(dirPath + "/" + file, "utf-8", (err, data) => {
      console.log(data);
    });
  });
});
