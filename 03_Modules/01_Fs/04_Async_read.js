import fs from "fs";

fs.readFile("01_write_file.js", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
