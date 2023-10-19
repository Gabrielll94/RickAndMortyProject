const {Favorite} = require("../models/Favorite");

const postFav = async(req, res) => {
    try {
        const {name, origin, species, gender, image} = req.boy;

        if(!name || !origin || !species || !gender || !image)
        return res.status(401).send('Faltan datos');

        await Favorite.findOrCreate({
            where: {name, origin, species, gender, image}
        })

        const allFavorites = await Favorite.findAll()

        return res.json(allFavorites)

    } catch (error) {
        res.status(500).json(error.messagge)
    }
}

module.exports = postFav;