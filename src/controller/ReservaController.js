import Houses from "../models/Houses";
import User from "../models/User";
import Reserve from "../models/Reserve";


class ReservaController{
    async store(req,res){
        const { house, date } = req.body
        const { user_id } = req.headers

        const casa = await Houses.findOne({ house })

        if(casa.user == user_id){
            return res.status(400).json({
                msg : "Não autorizado"
            })
        }
        if(!casa){
            return res.status(400).json({
                msg : "Casas não existe"
            })
        }
        if(casa.status == false){
            return res.status(400).json({
                msg : "Casa não esta disponivel"
            })
        }
        
        await Houses.updateOne({ _id : casa._id }, {
            status : false
        })

        await Reserve.create({
            date,
            house : casa._id,
            user : casa.user
        })
        
        
        return res.status(200).json({
            msg : "Tu é bom paizão"
        })
        
    }
    async show(req,res){
        const { user_id } = req.headers
        const reservas = await Reserve.findOne({ user : user_id}).populate('house').populate('user')

        return res.status(200).json({
            reservas : reservas
        })
    }
}


export default new ReservaController