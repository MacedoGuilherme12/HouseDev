import Houses from "../models/Houses";

class DashboardController{
    async show(req,res){
        const { user_id } = req.headers
        const casas = await Houses.find({ user : user_id})

        
        if(!user_id){
            return res.status(400).json({
                msg : "Não encontrado usuario"
            })
        }
        if(Object.keys(casas) == 0 ){
            return res.status(400).json({
                msg : "Não existe casas em seu nome"
            })
        }
        return res.status(200).json({
            msg : casas
        })
    }
}

export default new DashboardController