const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('node:fs');

const app = express();
const port = 30000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log('Serveur écoutant sur le port ',port); 
})

app.get('/products',(req, res) => {
    const data = fs.readFileSync('./ExempleDeJSONRecu.json', 'utf8');
    const jsondata = JSON.parse(data);
    res.json(jsondata);
});

app.get('/products/:ProductReference', (req, res) => {
    const taskProductReference = parseInt(req.params.ProductReference);
    const task = tasks.find(task => task.ProductReference === taskProductReference);

    if (task){
        res.json(task);
    }else{
        res.status(400).json({error : "tache non trouvée"});
    }
})