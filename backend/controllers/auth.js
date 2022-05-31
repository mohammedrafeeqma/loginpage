const User = require('../modals/User')

const bcrypt = require('bcrypt')
 const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({...req.body,password:hash})
        await newUser.save()
        res.status(200).json("user has been created")
    } catch (error) {
        next(error)
        
    }
}


const login = async(req,res,next) => {
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user)
        {
            return res.status(404).json('user is not found')
        }
        const passwordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!passwordCorrect)
        {
            return res.status(400).json('password is not correct')
        }

        res.status(200).json(user)
    } catch (error) {
        
    }
}

module.exports={register,login}