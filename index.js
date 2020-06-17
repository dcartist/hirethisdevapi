const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json())

app.use(cors())
    app.get("/", (req, res) => {
        res.send("Welcome to hirethisdev")
    })


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")} works`);
});