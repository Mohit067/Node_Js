import fs from 'fs'


fs.writeFile("02_async_file.txt", "Hello Mohit Async! ", (err) => {
    if(err) console.log(err);
    else console.log("File create successfully");
});