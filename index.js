const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let consents = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/consents/:consentId', (req, res) => {
    const consentId = req.params.consentId;
    console.log(consentId);
    res.send(`GET -> ${consentId}`);
});

app.get('/consents', (req, res) => {
    res.json(consents);
});

app.post('/consents', (req, res) => {
    const consent = req.body;
    console.log(consent);
    consents.push(consent);
    res.send('"Consent" is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))