// Get/api/user

export const getUserData = async (req, res) => {
    try {

        const role = req.user.role;
        const recentSearchedHotel = req.user.recentSearchedHotel;
        res.json({ success: true, role, recentSearchedHotel })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Store User Recent Searched Hotel

export const storeRecentSearchedHotel = async (req, res) => {
    try {

        const { recentSearchedHotel } = req.body;
        const user = await req.user;

        if (user.recentSearchedHotel.length < 3){
            user.recentSearchedHotel.push(recentSearchedHotel)
        } else {
            user.recentSearchedHotel.shift();
            user.recentSearchedHotel.push(recentSearchedHotel)
        }
        await user.save();
        res.json({ success: true, message: 'Hotel added' })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
};