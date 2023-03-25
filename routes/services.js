var express = require("express");
var router = express.Router();
const { spawn } = require("child_process");

router.get("/services", (req, res) => {
  const service = spawn("python", [
    "..\\python_service\\service.py", // path of the python service
    "param 0",
    666,
  ]);

  let dataToSend;

  service.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();

    // it receives and logs all the printed data in one batch
    // replacing needed to parse json string from the python service
    console.log(JSON.parse(dataToSend.replace(/'/g, '"')));
  });

  service.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

module.exports = router;
