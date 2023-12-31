import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from "./NavBar.module.css"
import PATHROUTES from '../../helpers/PathRoutes.helpers';

const NavBar = (props) => {
    const {onSearch} = props;
return (
    <div className={styles.nav}>
        <Link to={PATHROUTES.HOME}>Home</Link>
        <Link to={PATHROUTES.ABOUT}>About</Link>
        <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
        <SearchBar onSearch={onSearch} />
    </div>
)
}

export default NavBar