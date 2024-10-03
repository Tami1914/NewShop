const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Cafe web"});
});

require("./routes/coffee.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('El servidor ha arrancado en el puerto ${PORT}.');
});