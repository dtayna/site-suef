import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "../pages/inicio";
import Mapa from "../pages/mapa";
import Equipe from "../pages/equipe";

const MyRoutes = () => {
   return(
    <Router history={History}>
       <Routes>
           <Route exact element = { <Inicio/> }  path="/" exact />
           <Route element = { <Mapa/> }  path="/mapa" />
           <Route element = { <Equipe/> }  path="/equipe" />
       </Routes>
    </Router>
   )
}

export default MyRoutes;