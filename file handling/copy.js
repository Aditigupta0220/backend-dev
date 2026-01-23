const fs = require("fs");
const path = require("path");

function backupFile(filePath) {

  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);


  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const backupFileName = `${baseName}_${timestamp}${ext}`;
  const backupPath = path.join(dir, backupFileName);


  fs.copyFile(filePath, backupPath, (err) => {
    if (err) {
      console.error("Backup failed:", err);
      return;
    }
    console.log("Backup created:", backupFileName);
  });
}


backupFile("data.txt");
