const User = require('../models/User');

module.exports = {

  async index(req, res){
    const users = await User.find();
    return res.json(users);
  },

  async store(req, res){
    const { email  } = req.body;
        
    let user = await User.findOne({email});    
    if(!user){
        user = await User.create({email }) 
    }  
    return res.json(user)
  },

  async update(req, res){
    const {email} = req.body;
    const {user_id} = req.headers;
    let user = await User.findOneAndUpdate({_id: user_id}, {email}, {new: true});
    return res.json(user);
  }
}