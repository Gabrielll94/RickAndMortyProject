import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
        return async (dispatch) => {
            const {data} = await axios.post(endpoint, character)
        return dispatch({
            type: 'ADD_FAV',
            payload: data,
        });
    };} catch (error) {
        console.log(error.messagge)
    }
}

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async(dispatch) => {
        try {
            const data = await axios.delete(endpoint)
        return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
        }); 
    } catch (error) {
        const {messagge} = error
        console.log(messagge);
    }
    }
}


export const filterCards = (gender) => {
    return {
        type:'FILTER',
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type:'ORDER',
        payload: order
    }
}