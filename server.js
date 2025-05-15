const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.MONGODB_URL || 3000;


// const Person = require('./models/person');

// const MenuItem = require('./models/MenuItem');

app.get('/', (req, res) => {
  res.send('Hello World');
});


// app.post('/menu', async(req, res) => {
//   try{
//     // Assuming the request body contains menu itma data
//     const menuItemData = req.body;
//     // create a new menu item using the Mongoose model
//     const menuItem = new MenuItem(menuItemData);
//     // Save the new menu item to the database
//     const menu_data = await menuItem.save();
//     console.log('Menu item saved');
//     res.status(205).json(menu_data);
//   }catch(err){
//     console.log('Error creating menu item:', err);
//     res.status(500).json({err: 'Internal server error'});
//   }
// });

// Get Method to add a menu Item

// app.get('/menu', async(req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }catch(err){
//     console.log(err);
//     res.status(500).json({err: 'internal server Error'});
//   }
// })


// app.post('/person', async(req, res) =>{

//   // const data = req.body // 
//   // // create a new person document using the mongoose
//   // const newPerson = new Person(data);

//   // Save the newPerson to the database
//   // newPerson.save((error, savedperson) => {
//   //   if(error){
//   //     console.log('error saving person', error);
//   //     res.status(500).json({error: 'Internal server error'});
//   //   }
//   //   else{
//   //     console.log('data saved successfully');
//   //     res.status(200).json(savedperson);
//   //   }
//   // })

//   try{
//     const data = req.body // 
//     // create a new person document using the mongoose
//     const newPerson = new Person(data);

//     // Save the newPerson to the database
//     const reqponse = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(reqponse);

//   }catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal server error'});
//   }

// });


// app.get('/person', async(req, res) =>{
//   try{
//     const data = await Person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }catch(err){
//     console.log(err);
//     res.status(500),json({error: 'Internal server error'});
//   }
// });

// app.get('/person/:workType', async(req, res) => {
//   try{
//     const workType = req.params.workType; // Extract the work type from the URL parameter

//     if(workType == 'chef' || workType=='manager' || workType == 'waiter'){
//       const response = await Person.find({work: workType});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }
//     else{
//       // console.log('data fetched');
//       res.status(404).json({err: 'Internal work type'});
//     }
//   }catch(err){
//     console.log(err);
//     res.status(500),json({err: 'Internal server error'});
//   }
 

// })





// Import the router files
const menuItemRoutes = require('./routes/menuItemRoutes');
// use the routers
app.use('/menu', menuItemRoutes);



// Import the router files
const personRoutes = require('./routes/personRoutes');
// use the routers 
app.use('/person', personRoutes);



app.listen(PORT, () => {
  console.log('listen on port 3000');
});






