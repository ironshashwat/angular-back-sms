const express = require('express');
const PORT = 7777;
const app =express();
app.listen(PORT,(err)=>{
    if(err)
        console.log(`Connection Error ${err}`);
    else    
        console.log(`Connection established on PORT ${PORT}`);
});