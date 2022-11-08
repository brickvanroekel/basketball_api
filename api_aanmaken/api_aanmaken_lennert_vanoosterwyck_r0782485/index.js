const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const {v4: uuidv4} = require("uuid");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const {Client} = require('pg');
const { URLSearchParams } = require("url");

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false

    }
});

client.connect();




 app.get("/stages/all", (req, res) => {
    // get all stages from database
    client.query("SELECT * FROM stages", (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send(result.rows);
    });
}) 

app.get("/stages/id/:id",  (req, res) => {
    const id = req.params.id;
    client.query("SELECT * FROM stages WHERE id = $1", [id], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result.rows);
    });
});

// get all stages from specific year
app.get("/stages/year/:year", (req, res) => {
    const year = req.params.year;
    client.query("SELECT * FROM stages WHERE year = $1", [year], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result.rows);
    });
});



app.post("/stages/add", async (req, res) => {
    const urlparams = new URLSearchParams(req.query);
    const year = urlparams.get("year");
    const total_tdf_distance = urlparams.get("total_tdf_distance");
    const stage = urlparams.get("stage");
    client.query("INSERT INTO stages (year, total_tdf_distance, stage) VALUES ($1, $2, $3)", [year, total_tdf_distance, stage], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result.rows);
    });
});


app.delete("/stages/delete/:id", async (req, res) => {
    const id = req.params.id;
    client.query("DELETE FROM stages WHERE id = $1", [id], (err, result) => {
        if (err) {
            res.send(err); 
        }
        res.send(result.rows);
    });
});

app.put("/stages/update/:id", async (req, res) => {
    const id = req.params.id;
    const urlparams = new URLSearchParams(req.query);
    const year = urlparams.get("year");
    const total_tdf_distance = urlparams.get("total_tdf_distance");
    const stage = urlparams.get("stage");
    client.query("UPDATE stages SET year = $1, total_tdf_distance = $2, stage = $3 WHERE id = $4", [year, total_tdf_distance, stage, id], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result.rows);
    });
});










app.listen(process.env.PORT || 3000);