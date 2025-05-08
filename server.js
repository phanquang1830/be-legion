const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.send('Hello world 123123');
})

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

