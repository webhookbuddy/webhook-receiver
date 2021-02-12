const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');
let morgan = require('morgan');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"))


app.post('/', (req, res) => {
    // console.log("Got body:", req.body);
    let statusCode = parseInt(req.query.statuscode) || 200;
    const delay_ms = parseInt(req.query.delay) || 0;
    
    if (delay_ms !== undefined) {
        setTimeout(() => {
            res.status(statusCode).json({ msg: "hello" });
        }, delay_ms);
    }
});

app.listen(port, () => {
    console.log(`Running a API server at http://localhost:${port}/`);
});

