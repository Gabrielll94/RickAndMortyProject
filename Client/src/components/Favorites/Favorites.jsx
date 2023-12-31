import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import {filterCards, orderCards} from "../../redux/actions"
import { useState } from "react";

const Favorites = (props) => {
    const dispatch = useDispatch()
    const {myFavorites} = props;

    const [aux, setAux] = useState(false)

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

return (
    <div>
        <select onChange={handleOrder}>
            <options value="A">Ascendente</options>
            <options value="D">Descendente</options>
        </select>

        <select onChange={handleFilter}>
            <options value="Male">Male</options>
            <options value="Female">Female</options>
            <options value="Genderless">Genderless</options>
            <options value="Unknown">Unknown</options>
        </select>
        {myFavorites.map((char) => {
            return (
                <Card
                key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
                />
            )
        }
        )}
        </div>
);

}

const mapStatetoProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStatetoProps, null)(Favorites);