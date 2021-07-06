'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
  res.send('Welcome to the figuring out of AWS world')
});

app.listen(PORT, ()=>{
  console.log('cloud-server app up on'+ PORT);
})