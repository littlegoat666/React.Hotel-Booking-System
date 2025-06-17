import Hotel from '../models/Hotel.js';
import User from '../models/User.js';

export const registerHotel = async (req, res) => {
    try {
        const {name, address, contact, hotels} = req.body;
        const owner = req.user._id
    
    // Check if User Already Registered
    const hotel = await Hotel.findOne({ owner })
    if (hotel){
        return res.json({ success: false, message: 'Room Already Registered' })
    }

    await Hotel.create({ name, address, contact, hotels, owner });

    await User.findByIdAndUpdate(owner, { role: 'hotelOwner' });

    res.json({ success: true, message: 'Room Registered Successfully' })


    } catch (error) {
         res.json({ success: false, message: error.message })
    }
}