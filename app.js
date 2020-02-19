const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));
app.set('views', path.join(__dirname, "/views"))

app.use("/", require('./routes/index'))
app.use("/mail", require('./routes/mail'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})