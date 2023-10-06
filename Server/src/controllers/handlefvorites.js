let myFavorites = []
const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character)
    return res.status(200).json(myFavorites)
}



const deleteFav = (req, res) => {
    const {id} = req.params;
    const eliminarCharacter = myFavorites.filter((char) => {
        return char._id !== id
    })
    
    myFavorites = eliminarCharacter;
    return res.json(myFavorites)
}

module.exports = {postFav, deleteFav}