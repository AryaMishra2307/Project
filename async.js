const fs = require('fs');
console.time("start read");
console.time("start write")
fs.readFile('test.txt', 'utf8', function(err, data){
  if (err) {
    console.error("File error"+err);
    return;
  }
  console.log(data);
  console.timeEnd("start read");
});
fs.writeFile("write.txt","I am writing this automatically", function(){
    console.log("Done with write\n");
    console.timeEnd("start write")
})
