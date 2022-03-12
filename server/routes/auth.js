const router = require("express").Router();
const User = require("../models/userModels").user;
const bcrypt = require("bcrypt");


const jwt = require('jsonwebtoken');

const jwtKey = 'my_secret_key';
const jwtExpiryTimeInMilliSeconds = 1000 * 60 * 600; // 15 min

//REGISTER
router.post("/register", async (req, res) => {
    // try {
    //generate new password
    console.log("////////////////// ", req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user.password, salt);

    //create new user
    const newUser = new User({
        id: req.body.user.id,
        nickname: req.body.user.nickname,
        username: req.body.user.username,
        password: hashedPassword,
    });

    console.log(newUser);

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
    // } catch (err) {
    //     res.status(500).json(err)
    // }
});
//LOGIN
router.post("/login", async (req, res) => {

    console.log(req.body);
    const user = await User.findOne({ username: req.body.user.username });
    if (!user) {
        res.json("user not found")
    }

    else {
        const validPassword = await bcrypt.compare(req.body.user.password, user.password);
        if (!validPassword) {
            res.json("wrong password")
        }

        else {

            // res.status(200).json(user);

            // Create a new token with the username in the payload
            //  which expires X seconds after issue
            let X = jwtExpiryTimeInMilliSeconds;
            const token = jwt.sign({ user }, jwtKey, {
                algorithm: 'HS256',
                expiresIn: X
            })
            console.log('signin - creaeted token:', token);


            // set a cookie named 'token' with value = the token string we created above, 
            //   with max age 
            // here, the max age is in milliseconds, so we multiply by 1000
            res.cookie('token', token, { maxAge: jwtExpiryTimeInMilliSeconds })
            res.status(200).json({ "Token was set": "set", user });
        }
    }
});

module.exports = router;



