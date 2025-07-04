const express = require('express');
const app = express();

app.use(express.json()); // necessário para usar req.body
