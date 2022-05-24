var fs = require('fs');
console.time("Start timer")
var data = fs.readFileSync("test.txt",{encoding:'utf8'});
console.log(data);
console.timeEnd("Start timer");
console.time("Start timer")
fs.writeFileSync("write.txt","I am writing this automatically");
console.log("Done with the file");
console.timeEnd("Start timer");
console.log("done");