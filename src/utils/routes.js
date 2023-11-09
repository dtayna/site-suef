import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "../pages/inicio";
import Mapa from "../pages/mapa";
import Equipe from "../pages/equipe";
import Eventos from "../pages/eventos";
import Duvidas from "../pages/duvidas";
import Indicadores from "../pages/indicadores";
import Projetos from "../pages/projetos";
import Programas from "../pages/programas";

const MyRoutes = () => {
   return(
    
       <Routes>
           <Route element = { <Inicio/> } path="/"/>
           <Route element = { <Mapa/> }  path="/mapa" />
           <Route element = { <Equipe/> }  path="/equipe" />
           <Route element = { <Eventos/> }  path="/eventos" />
           <Route element = { <Duvidas/> }  path="/duvidas" />
           <Route element = { <Indicadores/> }  path="/indicadores" />
           <Route element = { <Projetos/> }  path="/projetos" />
           <Route element = { <Programas/> }  path="/programas" />
       </Routes>
  
   )
}

export default MyRoutes;