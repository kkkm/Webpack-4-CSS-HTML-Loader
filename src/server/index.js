
//import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString} from 'react-dom/server';
import Home from '../client/components/home.js'
//import proxy from 'express-http-proxy';
//import Routes from './client/Routes';
//import renderer from './helpers/renderer';
//import createStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html =`<html>
               <head></head> 
               <body>
               <div><div>${content}</div><div>Hey</div>
               </div>          
                <script src="bundle.js"></script>
        <link rel="stylesheet" href="main.css">
                 </body>
                   </html>`  ;                       
         res.send(html)
      })
   

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});



//const express = require('express');
//const app = express();
//
//app.get('/', (req, res) => {
//    res.send('An alligator approaches!');
//});
//
//app.listen(3000, () => console.log('Gator app listening on port 3000!'));