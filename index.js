const express = require('express');
const app = express();
const port = 3000;

app.use(() => {
  console.log(`Welcome To Server : ${port}`);
  console.log('Hallo Ganteng');
});

app.listen(port);
