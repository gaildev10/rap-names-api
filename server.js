const express = require('express');
const app = express();

const rappers = {
    '21 savage': {
        age: '29',
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'chance the rapper': {
        age: '29',
        birthName: 'Chancellor Bennett',
        birthLocation: 'Chicago, Illinois',
    },
    'unknown': {
        age: 0,
        birthName: 'unknown',
        birthLocation: 'unknown',
    },
}

const PORT = 8000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + './index.html');
});

app.get('/api/:rapperName', (req, res)=>{
    const rappersName = req.params.rapperName.toLowerCase();
    if(rappers[rappersName]){
        res.json(rappers[rappersName]);
    }else{
    res.json(rappers['Dylan']);
}});


app.listen(PORT, (req, res) =>{
    console.log(`The server is running on port ${PORT}! YOU better go catch it.`)
})