const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const user = require('../Models/user');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = 'Abhayisthe@boss';


//Route 1: creating a User using "api/auth/User", no login required
router.post('/User', [
   body('email', 'Enter a Valid Email').isEmail(),
   body('username', 'Enter a valid name').isString(),
   body('username', 'Enter a valid name').isLength({ min: 3 }),
   body('password', 'Password length must be more than 6').isLength({ min: 6 })

], async (req, res) => {
   let success = false;
   // check for validation for the authentication elements
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(404).json({ success, error: error.array() })
   }
   //wraping in try catch 
   try {

      //check whether this user exist with this name already?
      let User = await user.findOne({ email: req.body.email })
      if (User) {
         return res.status(400).json({ success, error: "this user already exists " })
      }



      //Creating a new hash for securing password
      const salt = bcrypt.genSaltSync(10);
      const secpswd = bcrypt.hashSync(req.body.password, salt);
      //for the new user creation
      User = await user.create({
         username: req.body.username,
         email: req.body.email,
         password: secpswd
      })
      const data = {
         User: {
            id: User.id
         }
      }

      // eslint-disable-next-line no-unused-vars
      const authtoken = jwt.sign(data, JWT_SECRET)
      success = true;
      res.json({ success, User, authtoken });
      // res.json(authtoken);
   } catch (error) {
      //console.log(error.message)
      res.status(500).send('some error occured')
   }
});

//Route 2: verify a user 'api/auth/login  using webtokens 'no login required'
router.post('/login', [
   body('email', 'Enter a Valid Email').isEmail(),

   body('password', 'Password length must be 6 or  more than 6').isLength({ min: 6 })

], async (req, res, next) => {
   // check for validation for the authentication elements
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(404).json({ error: error.array() })
   }
   const { email, password } = req.body;
   try {
      let success = false;
      const User = await user.findOne({ email })
      if (!User) {
         return res.status(400).json({ success, error: "Please enter the correct credientials" })
      }
      // Comparing the password with bcrypt.js
      const pswdcompare = await bcrypt.compare(password, User.password);
      if (!pswdcompare) {
         res.status(401).json({ success, error: "Please Enter the Correct password" })
         next();
      }

      else {

         const data = {
            User: {
               id: User.id
            }
         }

         const authtoken = jwt.sign(data, JWT_SECRET);
         success = true;
         res.json({ success, authtoken });
      }
   }
   catch (error) {
      //console.log(error)
      res.status(500).json('some error occured');
   }
});





//Route 3:  GEt user login details using POST: api/auth/myaccount  'login required'

router.post('/myaccount', fetchUser, async (req, res) => {



   try {
      const userId = req.User.id;
      //console.log(userId);
      const User = await user.findById(userId).select('-password');

      res.send(User);
   }

   catch (error) {
      //console.log(error)
      res.status(500).send('Internal server error');
   }


});






module.exports = router











