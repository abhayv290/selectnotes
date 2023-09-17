const express = require('express')
const router = express.Router();

const user = require('../Models/user');

const { body,validationResult } = require('express-validator');
//creating a User using "api/auth/User", no login required
router.post('/User', [
   body('email','Enter a Valid Email').isEmail(),
   body('name','Enter a valid name').isString(),
   body('name','Enter a valid name').isLength({ min: 3 }),
   body('password','Password length must be more than 6').isLength({min:6})

], async (req, res) => {
   // check for validation for the authentication elements
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(404).json({error:error.array()})
   }

   //wraping in try catch 
   try {
      
      //check whether this user exist with this name already?
   let User=await user.findOne({email:req.body.email})
   if (User) {
      return res.status(400).json({error:"this user already exists "})
   }
  //for the new user creation
   await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      
   }).then(user => res.json(user))
} catch (error) {
      console.log(error.message)
      res.status(500).send('some error occured')
}

  
  dff
   
   



  
})
 



module.exports = router





