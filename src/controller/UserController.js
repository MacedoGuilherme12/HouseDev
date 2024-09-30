import User from "../models/User"


class UserController{
    async store(req,res){
        const {idade, email} = req.body
        if(await User.find({ email })){
            return res.status(401).json({
                msg: "Ja existe esse email"
            })
        }
        const user = await User.create({email : email, idade : idade})
        
        return res.json({
            "Usuario Criado" : user
        })
    }
    async show(req,res){
        
    }
}

export default new UserController()