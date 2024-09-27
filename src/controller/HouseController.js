import Houses from "../models/Houses";

class HouseController {
  async store(req, res) {
    try{
      const file = req.file;
    const { house, valor, status } = req.body;
    const { user_id } = req.headers;


    if( !house || !valor || !status ){
        res.status(400).json({
            msg : "Favor preencher todos os campos"
        })
    }
    if (!user_id) {
      res.status(401).json({
        msg: "Não autorizado",
      });
    }
    
    const Casa = await Houses.create({
      image: file.filename,
      user: user_id,
      house,
      valor,
      status,
    });
    
    return res.status(200).json({
      msg: `Casa Criada : ${Casa}`,
    });

    }catch(e){
      return res.status(400).json({
        msg : "Error"
      })
    }
    
  }

  async index(req, res) {
    const { status } = req.query;

    const house = await Houses.find({ status });
    console.log(await Houses.find({ status }));

    res.status(200).json({
      msg: house,
    });
  }


  async destroy(req, res) {
    try{
      const { house } = req.body;
    const { user_id } = req.headers;
    const casa = await Houses.findOne({ house });
    

    try {
      if (casa.user != user_id) {
        res.status(401).json({
          msg: "Não autorizado",
        });
      }
      if (casa == "") {
        return res.status(400).json({
          msg: "Não encontrado",
        });
      }
    } catch (e) {
      res.status(401).json({
        msg: `Error:`,
      });
    }

    await Houses.deleteOne({ house });
    return res.status(301).json({
      msg: "Casa retirada",
      "Casa Retirada": casa,
    });
      
    }catch(e){
      return res.status(400).json({
        msg : "Error"
      })
    }
    
  }
}

export default new HouseController();
