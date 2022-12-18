import express from "express";
import { PrismaClient } from '@prisma/client';
// import consign from 'consign';
import path from 'path';
const consign = require('consign');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

consign()
  .include('src/routes')
  .then('src/model')
  .then('src/controller')
  .into(app)

app.listen(3000, () =>  console.log('Server is running'));