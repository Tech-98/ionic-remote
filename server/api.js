const { application } = require('express');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


const util = require('util');
const exec = util.promisify(require('child_process').exec);


app.get("/ls", function (req, res) {
    exec('ls').then(result => {
        res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(501);
    });
});

app.get("/uname", function (req, res) {
    exec('uname -a').then(result => {
        res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        res.send(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(501);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
