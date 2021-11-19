const fs = require("fs"); 
module.exports = function(path,conten){
    fs.appendFile(path,conten,(e)=>{
    });
}