const fs = require('fs');


module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {


        var content = fs.readFileSync(filePath, 'utf8');
        content = Buffer.from(content, 'hex').toString('utf8');
        if(content)
            resolve(content)
    });
}