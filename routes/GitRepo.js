const express = require("express");
const router = express.Router();
const GitRepos = require('../db/models/GitRepos')
 
router.get("/", (req, res) => {
    GitRepos.find().then(data => {
        res.json(data)
    })
})

module.exports = router