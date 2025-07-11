const express = require('express');
const app = express();
const port = 5000;



function delay(duration ) {
    const start = Date.now();
    while (Date.now() - start < duration) {
        // Busy-wait loop to simulate delay
    }

}

app.get('/', (req, res) => {
    res.send('Hello World!');
    }   
);


app.get('/timer', (req, res) => {
//    setTimeout(()=>{
//     return 
//      },9000) ;
delay(9000);
return res.send('Hello lates  World!');
}   
);



app.listen(port, () => {    console.log(`Example app listening at http://localhost:${port}`);
});     