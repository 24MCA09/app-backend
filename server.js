const userController = require('./controllers/userController')


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

const PORT = 8080;

const URL = "mongodb+srv://24mca09:admin123@cluster0.wyqocb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL)
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((err) => console.log("Error  : ", err))


app.listen(PORT, () => {
    console.log("Server running!");
});


// routes
app.post("/register",userController.register);

app.post("/login",userController.login)
