const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');
// require the Drone model here

router.get('/drones', (req, res, next) => {
     Drone.find()
     .then(drones=>{
      console.log(drones)
      res.render('drones/list.ejs', {drones})
     })
});

router.get('/drones/create', (req, res, next) => {

  res.render('drones/create-form.ejs')

});

router.post('/drones/create', (req, res, next) => {
 
    Drone.create(req.body)
    .then(()=>{
      res.redirect('/drones')
    })   
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((drone)=>{
    res.render('drones/update-form.ejs', {drone})
  })  

});

router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then((drone)=>{
    res.redirect('/drones')
  }) 
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/drones')
  }) 
});

module.exports = router;
