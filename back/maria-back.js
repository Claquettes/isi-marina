require('dotenv').config();

// Import required modules
const express = require("express");
const mariadb = require("mariadb");
const cors = require("cors"); // Import the cors module

// Create a new Express application
const app = express();
app.use(cors()); // Enable CORS for all requests

// Define the database connection configuration
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_MARINA
});

//sends back all of the boats in the database
app.get("/marina/boats", (req, res) => {
        pool.getConnection()
            .then(conn => {
                conn.query("SELECT * FROM boats")
                    .then((rows) => {
                        res.send(rows);
                    })
                    .catch((err) => {
                        res.send(err);
                    });
                conn.end();
            })
            .catch((err) => {
                res.send(err);
            });
    }
);

//sends back all of the users in the database
app.get("/marina/users", (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM users")
                .then((rows) => {
                    res.send(rows);
                })
                .catch((err) => {
                    res.send(err);
                });
            conn.end();
        })
        .catch((err) => {
            res.send(err);
        });
});

//sends back all of the emplacements in the database
app.get("/marina/emplacements", (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM emplacements")
                .then((rows) => {
                    res.send(rows);
                })
                .catch((err) => {
                    res.send(err);
                });
            conn.end();
        })
        .catch((err) => {
            res.send(err);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    let runtimer = 0;
    setInterval(() => {
        console.log(
            "Server is running for " + runtimer + " minutes on port " + PORT
        );
    }, 60000);
});

