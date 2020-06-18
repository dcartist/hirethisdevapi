const express = require("express");
const router = express.Router();
const StudyGuide = require('../db/models/Links')
 
router.get("/", (req, res) => {
    StudyGuide.find().then(data => {
        res.json(data)
    })
})

router.get("/update/:id", (req,res)=>{
    StudyGuide.findById(req.params.id).then(results=>res.json(results))
})
router.put("/update/:id", (req, res) => {
    StudyGuide.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.post("/new", (req, res) => {
    StudyGuide.create(req.body).then(results => res.json(results))
})

router.delete("/delete/:id", (req, res) => {
        StudyGuide.findByIdAndDelete(req.params.id).then(results => res.json(results))
    })




module.exports = router