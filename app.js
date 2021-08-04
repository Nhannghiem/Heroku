const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/view/index.html');
})

const PORT = process.env.PORT ||5000;
app.listen(PORT);
console.log('sever is running:', PORT)