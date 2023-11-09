import styled from 'styled-components';
import { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import { BlockDesktop , BlockTabletSmartphone } from './global-components';
import '../styles/global.css';

const ContainerDesktop = styled.nav`
  transparent;
  display: flex;
  justify-content: center;
`;

const ContainerSmartphone = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 3px 5% 3px; 
`;

const ItemDesktop = styled.div`
  font-size: 0.8em;
  min-width: 90px;
  text-align: center;
  background-color: white;
  border-bottom-width: 8px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.itemcolor};
  color: ${props => props.itemcolor};
  padding: 15px 20px 20px 20px;
  font-weight: bold;
`;

const IconSmartphone = styled.div`
  font-size: 2.5em;
  color: var(--mainColor1);
  border-radius: 5px;
  border: 1px solid var(--colorBorder);
  max-width: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuExpandido = styled.div`
  background-color: var(--mainColor1);
  color: white;
  padding: 10px 30px 10px 30px;
  display: ${props => props.clicado ? props.clicado : "none"};
  
  @media screen and (min-width: 930px) {
   display: none;
  }
`;

const ItemSmartphone = styled.div`
  font-size: 1.2em;
  min-width: 90px;
  text-align: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: white;
  color: white;
  padding: 15px 20px 20px 20px;
`;

const ItemSmartphone2 = styled.div`
  font-size: 1.2em;
  min-width: 90px;
  text-align: center;
  color: white;
  padding: 15px 20px 20px 20px;
`;

const MainMenu = (props) => {


  function expandMenu() {
    if (click=="none"){
      console.log("cheguei aqui");
      setClick("block");
    }else{
      setClick("none");
    }
  }

  const [click,setClick] = useState("none");

  return(
    <>
    <BlockDesktop>
      <ContainerDesktop>
        
          <Link className="links" to="/">
            <ItemDesktop itemcolor={"var(--mainColor1)"}>INÍCIO</ItemDesktop>
          </Link>
          <Link className="links" to="/mapa">
            <ItemDesktop  itemcolor={"var(--pink)"}>MAPA</ItemDesktop>
          </Link>
          <Link className="links" to="/eventos">
            <ItemDesktop  itemcolor={"var(--yellow)"}>EVENTOS</ItemDesktop>
          </Link>
          <Link className="links" to="/duvidas">
            <ItemDesktop  itemcolor={"var(--green)"}>DÚVIDAS</ItemDesktop>
          </Link>
          <ItemDesktop  itemcolor={"var(--blue)"}>DOCUMENTOS</ItemDesktop>
          <Link className="links" to="/programas">
          <ItemDesktop  itemcolor={"var(--red)"}>
            PROGRAMAS
            
          </ItemDesktop>
          </Link>
          <Link className="links" to="/equipe">
            <ItemDesktop  itemcolor={"var(--mainColor1)"}>EQUIPE</ItemDesktop>
          </Link>
       
      </ContainerDesktop>
    </BlockDesktop>

    <BlockTabletSmartphone>
      <ContainerSmartphone>
        <IconSmartphone onClick={expandMenu}>
          <CgMenu/>
        </IconSmartphone>
      </ContainerSmartphone>
    </BlockTabletSmartphone>

    <MenuExpandido clicado={click}>
   
      <Link className="links" to="/">
        <ItemSmartphone>Início</ItemSmartphone>
      </Link>
      <Link className="links" to="/mapa">
        <ItemSmartphone>Mapa</ItemSmartphone>
      </Link>
      <Link className="links" to="/eventos">
        <ItemSmartphone>Eventos</ItemSmartphone>
      </Link>
      <Link className="links" to="/duvidas">
      <ItemSmartphone>Dúvidas</ItemSmartphone>
      </Link>
      <ItemSmartphone>Documentos</ItemSmartphone>
      <Link className="links" to="/programas">
      <ItemSmartphone>Projetos</ItemSmartphone>
      </Link>
      <Link className="links" to="/equipe">
        <ItemSmartphone2>Equipe</ItemSmartphone2>
      </Link>
     
    </MenuExpandido>
    
    </>
    
  );
}


export default MainMenu;
