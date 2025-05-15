const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


router.post('/', async(req, res) =>{

  // const data = req.body // 
  // // create a new person document using the mongoose
  // const newPerson = new Person(data);

  // Save the newPerson to the database
  // newPerson.save((error, savedperson) => {
  //   if(error){
  //     console.log('error saving person', error);
  //     res.status(500).json({error: 'Internal server error'});
  //   }
  //   else{
  //     console.log('data saved successfully');
  //     res.status(200).json(savedperson);
  //   }
  // })

  try{
    const data = req.body // 
    // create a new person document using the mongoose
    const newPerson = new Person(data);

    // Save the newPerson to the database
    const reqponse = await newPerson.save();
    console.log('data saved');
    res.status(200).json(reqponse);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }

});



router.get('/', async(req, res) =>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500),json({error: 'Internal server error'});
  }
});

router.get('/:workType', async(req, res) => {
  try{
    const workType = req.params.workType; // Extract the work type from the URL parameter

    if(workType == 'chef' || workType=='manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }
    else{
      // console.log('data fetched');
      res.status(404).json({err: 'Internal work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500),json({err: 'Internal server error'});
  }
});


router.put('/:id', async(req, res) => {
    try{
        const personId = req.params.id; // Extreact the id from the URL parameter
        const updatedPersonData = req.body; // Updata data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the update document
            runValidators: true, // Run Monggoes validation

        })

        if(!updatedPersonData){
            return res.status(404).json({err: 'Person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
})


router.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id; // Extract the person ID from the UrL parameter
        // assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: "person Deleted successfully"});
         
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal server error'});
    }
})

module.exports = router;