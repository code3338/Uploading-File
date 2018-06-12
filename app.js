"use strict"
const express= require("express");
const cors = require("cors");
let pswd = require("./pswd.js");
let bodyParser =require("body-parser");
const fileUpload = require('express-fileupload');

let app = express();

// app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  console.log(req.files);
  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv(`http://127.0.0.1:3000/${req.body.selectedFile.name}`, function(err) {
  //   if (err)
  //     return res.status(500).send(err);
  //
  //   res.send('File uploaded!');
  // });
});

app.listen(3000);
