
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Home/Filme';
import Header from './components/Header';
import Erro from './pages/Home/Erro';
import Favoritos from './pages/Home/Favoritos';


function RoutesApp (){
    return(
        <BrowserRouter>
          <Header/>
         <Routes>
            
             <Route element = { <Home/> }  path="/" />
             <Route element = { <Filme/> }  path="/filme/:id" />
             <Route element = { <Favoritos/>} path="/favoritos" />
            
             <Route element= {<Erro/>}  path="*"/>
         </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;