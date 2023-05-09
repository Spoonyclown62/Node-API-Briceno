require("dotenv").config()
const cors = require("cors")
const express = require('express');
const mongoose = require("mongoose");

const app = express();
port = process.env.PORT || 3000;

//Conexión a la BD
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;

//Setear manejo de eventos
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", require("./routes/rutas"));

app.listen(port, () => console.log(`Listening on port ${port}...`));
