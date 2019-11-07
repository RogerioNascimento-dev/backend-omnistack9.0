const Booking = require('../models/Booking');

module.exports = {
  async store(req, res){
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { data } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      data,
    });

    //Retorndando os dados do relacionamento dos schemas
    await booking.populate('spot').populate('user').execPopulate();

    const ownerSocket = req.connecedUsers[booking.spot.user];
    if(ownerSocket){      
      req.io.to(ownerSocket).emit('booking_request',booking);
    }

    return res.json(booking);
  }
}