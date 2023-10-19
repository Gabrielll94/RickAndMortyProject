const {Favorite} = require("../models/Favorite");

const deleteFav = async(req, res) => {
    try {
        const {id} = req.params

        await Favorite.destroy({where: {id: id}})

        const allFavorites = await Favorite.findAll()

        return res.json(allFavorites)

    } catch (error) {
        res.status(500).json(error.messagge)
    }
}

module.exports = deleteFav;