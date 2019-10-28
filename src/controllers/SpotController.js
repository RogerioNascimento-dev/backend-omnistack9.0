const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
  
  async index(req, res){
    const {tech} = req.query;
    const spots = await Spot.find({tecnologias: tech});

    return res.json(spots);
  },
  
  async store(req, res){
    const { filename } = req.file;
    const {empresa, valor, tecnologias} = req.body;
    const { user_id } = req.headers;
  
    const user = await User.findById(user_id);
    if(!user){ 
      return res.status(400).json({error: 'Usuário não existe'});
    }
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