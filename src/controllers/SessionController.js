const User = require('../models/User');

module.exports = {
  async store(req, res){
    const { email } = req.body //O mesmo de (const email = req.body.email)
    
    //findOne = busca o registro no banco
    let user = await User.findOne({email});    
    if(!user){
        user = await User.create({email});    
    }  
    return res.json(user)
  }
}