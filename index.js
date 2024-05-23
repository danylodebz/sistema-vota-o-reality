require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "funcionando!"
    })
})



app.get('/clientes', async (req, res) => { 
    const customers = await db.selectCustomers();
    res.json(customers);
})

app.listen(port);

console.log("backend rodando");