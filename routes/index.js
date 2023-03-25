var express = require("express");
var router = express.Router();
const { spawn } = require("child_process");

/* GET home page. */
router.get("/", function (req, res, next) {
  const service = spawn("python", ["..\\python_service\\dummy.py"]);

  let dataToSend;

  service.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();

    console.log(dataToSend);
  });

  service.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    // res.send(dataToSend);
  });

  res.render("index", { title: "Express" });
});

module.exports = router;
