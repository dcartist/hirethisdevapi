const express = require("express");
const cors = require("cors");
const gitReposController = require("./routes/GitRepo");
const jobController = require("./routes/Job");
const cheatsheetController = require("./routes/CheatSheet");
const studyGuidesController = require("./routes/StudyGuide");
const app = express();
const parser = express.json();
app.use(express.json());

app.use(cors());
// app.use(express.json().urlencoded({ extended: true }));
// app.use(parser)
app.get("/", (req, res) => {
  res.send("Welcome to hirethisdev");
});

app.use("/gitrepos", gitReposController);
app.use("/jobs", jobController);
app.use("/cheatsheets", cheatsheetController);
app.use("/studyguides", studyGuidesController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")} works`);
});
