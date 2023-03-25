var express = require('express');
const multer = require("multer");
var router = express.Router();

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
// Export routes

router.post('/fileupload', upload.single('picture'), (req, res, next) => {
    res.status(200).json({message: `File uploaded successfully on '${process.cwd()}/uploads/${req.file.filename}`});
});

module.exports = router;
