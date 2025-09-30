const fs = require("fs"); 
const path = require("path"); 
 
// List of files to update 
const files = ["apiServer.js"]; 
 
files.forEach(file =
    const filePath = path.join(__dirname, file); 
    let content = fs.readFileSync(filePath, "utf8"); 
 
    // Replace hardcoded credentials with env variable 
    content = content.replace(/credentials: JSON\.parse\\(.*?\\)/, "credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)"); 
 
    fs.writeFileSync(filePath, content, "utf8"); 
    console.log(file + " updated."); 
}); 
