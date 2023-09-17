const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const user = require('../Models/user');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
//creating a User using "api/auth/User", no login required
router.post('/User', [
   body('email', 'Enter a Valid Email').isEmail(),
   body('name', 'Enter a valid name').isString(),
   body('name', 'Enter a valid name').isLength({ min: 3 }),
   body('password', 'Password length must be more than 6').isLength({ min: 6 })

], async (req, res) => {
   // check for validation for the authentication elements
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(404).json({ error: error.array() })
   }

   //wraping in try catch 
   try {

      //check whether this user exist with this name already?
      let User = await user.findOne({ email: req.body.email })
      if (User) {
         return res.status(400).json({ error: "this user already exists " })
      }

      //Creating a new hash for securing password


      const salt = bcrypt.genSaltSync(10);
      const secpswd = bcrypt.hashSync(req.body.password, salt);
      //for the new user creation
      User = await user.create({
         name: req.body.name,
         email: req.body.email,
         password: secpswd
      })
      const data = {
         User: {
            user: user.id
         }
      }
      const JWT_SECRET = 'Abhayistheboss';
      const authtoken =  jwt.sign(data, JWT_SECRET)

      // res.json(User);
      res.json(authtoken);
   } catch (error) {
      console.log(error.message)
      res.status(500).send('some error occured')
   }
});
//verify a user 'api/auth/login  using webtokens 'no login required'

router.post('/login', [
   body('email', 'Enter a Valid Email').isEmail(),

   body('password', 'Password length must be 6 or  more than 6').isLength({ min: 6 })

], async (req, res) => {
   // check for validation for the authentication elements
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(404).json({ error: error.array() })
   }
   const { email, password } = req.body;
   try {
        const User = await  user.findOne({email})
      if (!User) {
         return res.status(400).json({ error: "Please enter the correct credientials" })
      }

      const pswdcompare =bcrypt.compare(password, User.password);
      if (!pswdcompare) {
         res.status(400).res.json({ error: "Please Enter the correct credientials" })
      }
      const data = {
         User: {
            user: user.id
         }
      }
      const JWT_SECRET = 'Abhayistheboss';
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json(authtoken);


   }
   catch (error) {
      console.log(error)
      res.status(500).json('some error occured');
   }
});



// GEt user login details using POST: api/auth/myaccount  'login required'

try {
   const User=await user.findById('userId')
} catch (error) {
   console.log(error)
   res.status(500).json('some error occured');
}





module.exports = router











