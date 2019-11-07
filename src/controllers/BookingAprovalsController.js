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

    //Enviando para o frontEndMobile informação de aceitação
    const bookingUserSocket = req.connecedUsers[booking.user]
    if(bookingUserSocket){
      req.io.to(bookingUserSocket).emit('booking_response',booking);
    }

    return res.json(booking);
  }
}