import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
const {id} = useParams()

const [character, setCharacter] = useState([])

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
    if (data.name) {
        setCharacter(data);
    } else {
        window.alert('No hay personajes con ese ID');
    }
    });
    return setCharacter({});
}, [id]);


return (
    <div>
    <h2>Nombre: {character?.name}</h2>
    <h2>Estado: {character?.status}</h2>
    <h2>Especie: {character?.species}</h2>
    <h2>Genero: {character?.gender}</h2>
    <h2>Origen: {character.origin?.name}</h2>
    <img src={character?.image} alt='' /> 
    </div>
)
}

export default Detail