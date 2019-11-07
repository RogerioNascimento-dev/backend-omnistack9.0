const Booking = require('../models/Booking');

module.exports = {
  async store(req,res){    
    const {booking_id} = req.params;
    const booking = await Booking.findById(booking_id).populate('spot');
    
    if(!booking){      
      return res.status(404).json({success:false,msg:"booking não encontrado"});
    }

    booking.aprovado = true;
    await booking.save();
    return res.json(booking);
  }
}