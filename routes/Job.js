const express = require("express");
const router = express.Router();
const Jobs = require('../db/models/Jobs')
 
router.get("/", (req, res) => {
    Jobs.find().then(data => {
        res.json(data)
    })
})

router.get("/update/:id", (req,res)=>{
    Jobs.findById(req.params.id).then(results=>res.json(results))
})
router.put("/update/:id", (req, res) => {
    Jobs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.post("/new", (req, res) => {
    Jobs.create(req.body).then(results => res.json(results))
})

router.delete("/delete/:id", (req, res) => {
        Jobs.findByIdAndDelete(req.params.id).then(results => res.json(results))
    })




module.exports = router