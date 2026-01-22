// Exercise 3: System Information Logger
// Create an application that logs system information (CPU, memory, platform) to a file every 5
// seconds using the os and fs modules.
const os = require('os');
const fs = require('fs');

function logSystemInfo() {
  const info = `
Time: ${new Date().toISOString()}
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB total, ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB free
-------------------------------
`;

  fs.appendFile('system_log.txt', info, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('System info logged.');
    }
  });
}

setInterval(logSystemInfo, 5000);