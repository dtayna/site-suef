import styled from 'styled-components';
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

const MainMenu = () => {
  return(
    <>
    <BlockDesktop>
      <ContainerDesktop>
        <BrowserRouter >
          <Link className="links" to="/">
            <ItemDesktop itemcolor={"var(--darkblue)"}>INÍCIO</ItemDesktop>
          </Link>
          <Link className="links" to="/mapa">
            <ItemDesktop  itemcolor={"var(--pink)"}>MAPA</ItemDesktop>
          </Link>
          <ItemDesktop  itemcolor={"var(--yellow)"}>EVENTOS</ItemDesktop>
          <ItemDesktop  itemcolor={"var(--green)"}>CONTATOS</ItemDesktop>
          <ItemDesktop  itemcolor={"var(--blue)"}>DOCUMENTOS</ItemDesktop>
          <ItemDesktop  itemcolor={"var(--red)"}>PROJETOS</ItemDesktop>
          <Link className="links" to="/equipe">
            <ItemDesktop  itemcolor={"var(--darkblue)"}>EQUIPE</ItemDesktop>
          </Link>
        </BrowserRouter>
      </ContainerDesktop>
    </BlockDesktop>

    <BlockTabletSmartphone>
      <ContainerSmartphone>
        <IconSmartphone>
          <CgMenu/>
        </IconSmartphone>
      </ContainerSmartphone>
    </BlockTabletSmartphone>
    </>
    
  );
}


export default MainMenu;
