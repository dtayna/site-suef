import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "../pages/inicio";
import Mapa from "../pages/mapa";

const MyRoutes = () => {
   return(
    <Router history={History}>
       <Routes>
           <Route exact element = { <Inicio/> }  path="/" exact />
           <Route element = { <Mapa/> }  path="/mapa" />
       </Routes>
    </Router>
   )
}

export default MyRoutes;