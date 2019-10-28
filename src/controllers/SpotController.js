const Spot = require('../models/Spot');

module.exports = {
  async store(req,res){
    const { filename } = req.file;
    const {empresa, valor, tecnologias} = req.body;
    const { user_id } = req.headers;
  
    const spot = await Spot.create({
      user: user_id,
      imagem: filename,
      empresa,
      valor,
      tecnologias: tecnologias.split(',').map(tec => tec.trim()),      
    })
    return res.json(spot);
  }
};