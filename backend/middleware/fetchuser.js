const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Abhayisthe@boss';

const fetchUser = (req,res,next) => {
    //GEt user from the verifying web tokens
    
    let token = req.header('auth-token');
    if (!token) {
        res.status(401).json({error:"Enter the token first"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        
        req.User = data.User;
        
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).send('Authorisation Error');
    }
}

module.exports=fetchUser