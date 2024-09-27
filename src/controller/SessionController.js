import User from "../models/User"


class SessionController{
    async store(req,res){
        const {idade, email} = req.body
        

        const user = await User.create({email : email, idade : idade})
        if(User.find(email == email)){
            console.log('entrou')
        }
        return res.json({
            "Usuario Criado" : user
        })
    }
    async show(req,res){
        
    }
}

export default new SessionController()