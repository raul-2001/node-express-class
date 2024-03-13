const os = require("os");

const myComp = {
    hostname: os.hostname(),
    myPlatform: os.platform(),
    machine: os.machine(),
    homeDir: os.homedir(),
    release: os.release(),
    userInfo: os.userInfo(),
    uptime: os.uptime() / 60,
}

console.log(myComp);