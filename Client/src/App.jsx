import { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import axios from "axios";
import About from './components/About/About.jsx';
import {Route, Routes} from "react-router-dom";
import Detail from './components/Detail/Detail.jsx';
import PATHROUTES from './helpers/PathRoutes.helpers.js';
import Form from "./components/Form/Form";
import {useLocation, useNavigate} from "react-router-dom";
import Favorites from './components/Favorites/Favorites.jsx';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const {pathname} = useLocation();

  const navigate = useNavigate();
const [access, setAccess] = useState(false);

const EMAIL = "Gabriel@gabriel.com";
const PASSWORD = "1234567";
// function login(userData) {
// //   const { email, password } = userData;
// //   const URL = 'http://localhost:3001/rickandmorty/login/';
// //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
// //     const { access } = data;
// //     setAccess(data);
// //     access && navigate('/home');
// //   });
// // }

const login = async(userData) => {
  try {
    const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  const {data} = await axios(URL + `?email=${email}&password=${password}`)
  const { access } = data;
    setAccess(data);
    access ? navigate('/home') : window.alert("Invalid user")
  } catch (error) {
    console.log("error")
  }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

async function onSearch(id) {
  try {
  const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
          setCharacters((oldChars) => [...oldChars, data]);
    } catch {
      window.alert(error.response.data);
  }
}
  
//   const onSearch = (id) => {
//     axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      
//     });
// }

const onClose = (id) => {
  setCharacters(characters.filter((chara)=>{return chara.id !==Number(id)}));  //elimina el elemento del array de characters que coin
}

  return (
      <div className='App'>
        {pathname !=="/" && <NavBar onSearch={onSearch}/>}
        
        <Routes>
          <Route path={PATHROUTES.LOGIN} element={<Form login={login}/>}/>
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path={PATHROUTES.ABOUT} element={<About />}/>
          <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
          <Route path={PATHROUTES.FAVORITES} element={<Favorites />}/>
        </Routes>
      </div>
  );
}

export default App;
