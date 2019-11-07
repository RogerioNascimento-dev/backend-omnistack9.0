const Booking = require('../models/Booking');

module.exports = {

  async store(req,res){
    const { booking_id } = req.params;
    booking = await Booking.findById(booking_id).populate('spot');

    if(!booking){
      return  res.status(404).json({success:false, msg:"Booking Não encontrado!"})
    }

    booking.aprovado = false;
    await booking.save();
    return res.json(booking);        
  }
}