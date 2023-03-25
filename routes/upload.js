var express = require('express');
const multer = require("multer");
var router = express.Router();
const { spawn } = require("child_process");
const maxSize = 2 * 1024 * 1024;

// const { Storage } = require("@google-cloud/storage");
// const storage = new Storage({ keyFilename: "google-cloud-key.json" });
// const bucket = storage.bucket("hackmk_upload_folder");
// const nodeUrl = require('url')
router.post('/', function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
    res.json('Ok')
    res.status(200)
})

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${process.cwd()}/uploads/`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1].toLowerCase())
    }
});
var upload = multer({ storage: storage });
router.post('/fileupload', upload.single('picture'), (req, res, next) => {
    try {
        var service = spawn("python3", [
            `${process.cwd()}` + "/test.py",
            `${process.cwd()}/uploads/`+`${req.file.filename}`
        ]);
        let dataToSend;
        service.stdout.on("data", function (data) {
            dataToSend = data.toString();
        });

        service.on("close", (code) => {
            res.status(200).json({message: dataToSend});
        });
        res.status(200).json({message: `File uploaded successfully on '${process.cwd()}/uploads/${req.file.filename}'`});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message: `Fail`});
    }

});

// let upload = multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: maxSize },
// });
// router.post('/fileupload', upload.single('picture'), (req, res, next) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send({ message: "Please upload a file!" });
//         }
//
//         // Create a new blob in the bucket and upload the file data.
//         const blob = bucket.file(req.file.originalname);
//         const blobStream = blob.createWriteStream({
//             resumable: false,
//         });
//
//         blobStream.on("error", (err) => {
//             res.status(500).send({ message: err.message });
//         });
//
//         blobStream.on("finish", async (data) => {
//             // Create URL for directly file access via HTTP.
//             const publicUrl = nodeUrl.format(`https://storage.cloud.google.com/${bucket.name}/${blob.name}`);
//
//             return res.status(200).send({
//                 message:
//                     `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
//                 url: publicUrl,
//             });
//         });
//
//         blobStream.end(req.file.buffer);
//     } catch (err) {
//         res.status(500).send({
//             message: `Could not upload the file: ${req.file.originalname}. ${err}`,
//         });
//     }
// });

module.exports = router;
