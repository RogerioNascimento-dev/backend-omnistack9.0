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

    const bookingUserSocket = req.connecedUsers[booking.user]
    if(bookingUserSocket){
      req.io.to(bookingUserSocket).emit('booking_response',booking);
    }

    return res.json(booking);        
  }
}