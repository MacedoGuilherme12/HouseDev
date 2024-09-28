import Houses from "../models/Houses";

class HouseController {
  async store(req, res) {
    try {
      const file = req.file;
      const { house, valor, status } = req.body;
      const { user_id } = req.headers;
      const casa = await Houses.findOne({ house })
      if(casa != null){
        if (await Houses.find({ house })) {
          return res.status(400).json({
            msg: "Ja existe essa casa",
          });
        }
      }
      if (!user_id) {
       return res.status(401).json({
          msg: "Não autorizado",
        });
      }
      if (!house || !valor || !status) {
       return res.status(400).json({
          msg: "Favor preencher todos os campos",
        });
      }

      const Casa = await Houses.create({
        image: file.filename,
        user: user_id,
        house,
        valor,
        status,
      });

      return res.status(200).json(Casa);
    } catch (e) {
      return res.status(400).json({
        msg: e.message,
      });
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
    try {
      const { house } = req.body;
      const { user_id } = req.headers;
      const casa = await Houses.findOne({ house });
      
      if (casa == null) {
        return res.status(400).json({
          msg: "Não encontrado",
        });
      }
      
      if (casa.user != user_id) {
        return res.status(401).json({
          msg: "Não autorizado",
        });
      }
      
      

      await Houses.findOneAndDelete({ house });

      return res.status(301).json({
        msg: "Casa retirada",
        "Casa Retirada": casa,
      });
    } catch (e) {
      return res.status(400).json({
        msg: e.message,
      });
    }
  }
}

export default new HouseController();
