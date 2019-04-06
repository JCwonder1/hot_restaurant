//TODO: Create an array to store reservations


const express = require('express');
const app = express();
const PORT = 3000;
let createdReservations = [];

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("We are on the home page");
});

app.post('/api/create_reservation', (req, res)=>{
    res.json({ data: 'Hello World' });
    
    createdReservations.push(req.body);
    console.log(createdReservations);
   
});

app.get ('/api/view_reservations', (req, res)=>{
    res.send(createdReservations);
});


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})
//Initialize express
//create api routes
//api/reervation - create
//api/tables - view tables

