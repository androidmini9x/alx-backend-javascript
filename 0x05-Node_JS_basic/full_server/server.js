const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

app.listen(port);

export default app;
