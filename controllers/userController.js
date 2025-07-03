const users = require("../models/userModal")


const register = async (req, res) => {
    console.log('inside register controller function');

    const { username, email, password } = req.body
    console.log(username, email, password);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Account already Exist !! please login..")
        } 
        else {
            const newUser = new users({
                username,
                email,
                password
            })

            await newUser.save()

            res.status(200).json(newUser)
console.log('Registration sucess');

        }
    } catch (err) {
        res.status(401).json(`Register API Failed, ERROR : ${err}`)
    }

}

const login = async (req, res) => {
    console.log('inside login function');

    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email, password });
        console.log(existingUser);

        if (existingUser) {
          
            res.status(200).json({
                existingUser
            });
            console.log('login sucess');
            
        } 
        else {
            res.status(404).json(`Incorrect Email/Password`);
        }
    } catch (err) {

        res.status(401).json(`Login API Failed, ERROR: ${err}`);
    }
};



module.exports = { register,login };