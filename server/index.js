const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const markdown = require('./markdown.js');
const { getExample, getHn } = require('./example.js');
const { screenshot2 } = require('./screenshot2.js');

const app = express();

let env = process.env.NODE_ENV || 'development';

// if (env === 'development') {
//   app.use(cors());
// } else {
//   let corsOptions = {
//     origin: 'https://grobel.dev',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   };

//   app.use(cors(corsOptions));
// }

app.use(cors());

app.get('/', async (req, res) => {
  try {
    // let path = 'articles';
    // let files = await markdown.getFiles(path);
    // console.log(files);
    let testResponse = await screenshot2(req, res);
    res.set('Content-Type', 'image/jpeg; charset=UTF-8');
    res.status(200).send(testResponse);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.get('/testing', async (req, res) => {
  try {
    // let path = 'articles';
    // let files = await markdown.getFiles(path);
    // console.log(files);
    let exampleResult = await getExample();

    res.set('Content-Type', 'image/jpeg; charset=UTF-8');
    res.status(200).send(exampleResult);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(8080, err => {
  console.log('Listening on port 8080');
});

// 'use strict';

// const { screenshot } = require('./screenshot.js');

// const express = require('express');
// const puppeteer = require('puppeteer');
// const app = express();

// app.use(screenshot);

// const server = app.listen(process.env.PORT || 8080, err => {
//   if (err) return console.error(err);
//   const port = server.address().port;
//   console.info(`App listening on port ${port}`);
// });

// module.exports = app;

// async function debug() {
//   //   return await markdown.getFileList();
//   let path = 'articles';
//   return await markdown.getFileMeta(path);
// }

// console.log(await debug());
