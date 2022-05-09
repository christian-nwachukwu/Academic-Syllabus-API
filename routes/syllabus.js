const express = require('express');

const router = express.Router();
const Syllabus =  require('../model/syllabus');

//Get main route
//Get all the list of syllabus
router.get('/', async (req, res) =>{
    try {
        const syllabus = await Syllabus.find();          //try retrieve from DB
            res.json(syllabus);                          //take data and respond to screen with status 200 and data in json
    }
    catch(err) {
           //if no data, display error msg
           res.json({message: err});
        }
});




//Get a single item from the syllabus
router.get('/:syllabusId', async (req, res) =>{
    try {
        const syllabus = await Syllabus.findById(req.params.syllabusId);          //retrieve from DB by _id
            res.json(syllabus);                              //take data and respond to screen with status 200 and data in json
    }
    catch(err) {
           //if no data, display error msg
           res.json({message: err});
        }
});




//Submits a new post to DB
router.post('/', async (req, res) =>{
    //create new syllabus object to write post to database
    const syllabus = new Syllabus({
        //parse the object
        title: req.body.title,
        description: req.body.description
    });

    try {
        const saveSyllabus = await syllabus.save();          //save to DB
        res.json(saveSyllabus);                              //try take data and respond to screen with status 200 and data in json
    }
    catch(err) {
        //if no data, display error msg
        res.json({message: err});
    }
});



//delete specific syllabus
router.delete('/:syllabusId', async (req, res) =>{
    try {
        const removeSyllabus = await Syllabus.deleteOne({_id: req.params.syllabusId});          //retrieve from DB by _id
            res.json(removeSyllabus);                              //take data and respond to screen with status 200 and data in json
    }
    catch(err) {
           //if no data, display error msg
           res.json({message: err});
        }
})



//Get course route
router.patch('/:syllabusId', async (req, res) =>{
    try {
        const updatedSyllabus = await Syllabus.updateOne({_id: req.params.syllabusId}, {$set: {
            title: req.body.title,
            description: req.body.description
        }});
        res.json(updatedSyllabus);
    } catch (err) {
        res.json({message: err});
        
    }
});

module.exports = router;