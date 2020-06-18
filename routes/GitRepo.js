const express = require("express");
const router = express.Router();
const GitRepos = require('../db/models/GitRepos')
 
router.get("/", (req, res) => {
    GitRepos.find().then(data => {
        res.json(data)
    })
})

router.get("/update/:id", (req,res)=>{
    GitRepos.findById(req.params.id).then(results=>res.json(results))
})
router.put("/update/:id", (req, res) => {
    GitRepos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.post("/new", (req, res) => {
    GitRepos.create(req.body).then(results => res.json(results))
})

router.delete("/delete/:id", (req, res) => {
        GitRepos.findByIdAndDelete(req.params.id).then(results => res.json(results))
    })




module.exports = router