const fs = require("fs");
const path = require("path");

const DIRECTORY = "./logs"; // change folder name if needed
const DAYS = 7;

const now = Date.now();
const maxAge = DAYS * 24 * 60 * 60 * 1000; // 7 days in ms

fs.readdir(DIRECTORY, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(DIRECTORY, file);

    fs.stat(filePath, (err, stats) => {
      if (err) return;

      const fileAge = now - stats.mtimeMs;

      if (fileAge > maxAge) {
        fs.unlink(filePath, (err) => {
          if (!err) {
            console.log("Deleted:", file);
          }
        });
      }
    });
  });
});
