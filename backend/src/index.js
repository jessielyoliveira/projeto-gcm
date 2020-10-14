const express = require('express');
//const routes = require('./routes');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3333);
