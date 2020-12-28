import models from '../models/User';

const SignUp = (res, req) =>  {
    models.User.create(user).then(result => {
            res.status(201).json({
                message: "User created successfully",
            });
            }).catch(error => {
                res.status(500).json({
                 message: "Something went wrong!",
            });
            });
}

const  logIn = (req, res) => {
    
}

module.exports = {
    SignUp,
    logIn
}