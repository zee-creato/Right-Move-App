

const express = require("express");
const app =express();


app.get('/', (req , res)=>{


res.send(`<h1>Serwer Dziala </h1>`)

})
app.listen(8888 , ()=>{

console.log(`Aplikacja wystartowala na porcie 8888`)


});