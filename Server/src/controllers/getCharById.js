const axios = require('axios')
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res) => {
    try{
        const {id} = req.params;
        const {data} = await axios.get(url + id)
        const character = {
            id: data.id, 
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            origin: data.origin.name, 
            image: data.image, 
            status: data.status
        }
        res.status(200).json(character)

} catch (error) {
    res.status(500).send(error.message)
}
}

// const getCharById = (req, res) => {
//     const {id} = req.params
//     axios.get(url + id)
//     .then((response) => {
//                 const {data} = response;
//                 const character = {
//                     id: data.id, 
//                     name: data.name, 
//                     gender: data.gender, 
//                     species: data.species, 
//                     origin: data.origin.name, 
//                     image: data.image, 
//                     status: data.status}


//                 return character.name
//                 ? res.status(200).json(character)
//                 : res.status(400).send("Not Found")
//     }) .catch((err) => {
//         res.status(500).send(err.message)
//     })
// }

module.exports = getCharById