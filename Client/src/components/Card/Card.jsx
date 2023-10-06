import PATHROUTES from '../../helpers/PathRoutes.helpers';
import styles from './Card.module.css';
import {Link, useLocation} from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions"
import { connect } from 'react-redux';
import { useState } from 'react';

const Card = (props) => {
   const {name, id, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = useState(false);

   const {pathname} = useLocation();

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.div}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         /<button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}

const mapsDispatchtoProps = (dispatch) => {
   return {
      add_fav: (character) => {
         dispatch(addFav(character))
      },
      remove_fav: (id) => {
         dispatch(removeFav(id))
      },
   };
};

const mapStatetoProps = () => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStatetoProps, mapsDispatchtoProps)(Card);
