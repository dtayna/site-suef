import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import '../styles/global.css';

const ItemMenuDesktop = styled.div`
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

const BlockDesktop = styled.div`
  transparent;
  display: block;
  
  @media screen and (max-width: 930px) {
    display: none;
  }`
;

const BlockSmartphone = styled.div`
    transparent;
    display: none;
    @media screen and (max-width: 930px) {
      display: block;
    }
`;

const ContainerMenuDesktop = styled.nav`
  transparent;
  display: flex;
  justify-content: center;
`;

const ContainerMenuSmartphone = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 3px 5% 3px; 
`;

const IconMenu = styled.div`
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

const itemcolor = {};


const MainMenu = () => {
  return(
    <>
    <BlockDesktop>
      <ContainerMenuDesktop>
        <BrowserRouter >
          <Link className="links" to="/"><ItemMenuDesktop itemcolor={"var(--darkblue)"}>INÍCIO</ItemMenuDesktop></Link>
          <Link className="links" to="/mapa"><ItemMenuDesktop  itemcolor={"var(--pink)"}>MAPA</ItemMenuDesktop></Link>
          <ItemMenuDesktop  itemcolor={"var(--yellow)"}>EVENTOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={"var(--green)"}>CONTATOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={"var(--blue)"}>DOCUMENTOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={"var(--red)"}>PROJETOS</ItemMenuDesktop>
          <Link className="links" to="/equipe"><ItemMenuDesktop  itemcolor={"var(--darkblue)"}>EQUIPE</ItemMenuDesktop></Link>
          </BrowserRouter>
      </ContainerMenuDesktop>
    </BlockDesktop>
    <BlockSmartphone>
      <ContainerMenuSmartphone>
        <IconMenu><CgMenu/></IconMenu>
      </ContainerMenuSmartphone>
    </BlockSmartphone>
    </>
    
  );
}


export default MainMenu;
