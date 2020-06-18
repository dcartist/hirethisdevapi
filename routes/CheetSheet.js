const express = require("express");
const router = express.Router();
const CheatSheets = require('../db/models/CheatSheets')
 
router.get("/", (req, res) => {
    CheatSheets.find().then(data => {
        res.json(data)
    })
})

router.get("/update/:id", (req,res)=>{
    CheatSheets.findById(req.params.id).then(results=>res.json(results))
})
router.put("/update/:id", (req, res) => {
    CheatSheets.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.post("/new", (req, res) => {
    CheatSheets.create(req.body).then(results => res.json(results))
})

router.delete("/delete/:id", (req, res) => {
        CheatSheets.findByIdAndDelete(req.params.id).then(results => res.json(results))
    })




module.exports = router