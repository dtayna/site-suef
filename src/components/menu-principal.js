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

const ContainerMenuDesktop = styled.div`
  transparent;
  display: flex;
  justify-content: center;
`;

const ContainerMenuSmartphone = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 3px 5% 3px; 
`;

const IconMenu = styled.div`
  font-size: 2.5em;
  color: #003453;
  border-radius: 5px;
  border: 1px solid #ccd3d5;
  max-width: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const itemcolor = {};
const darkblue = '#003453';
const pink = '#C65F9E';
const yellow = '#FFAB08';
const green = '#B9C73A';
const blue = '#57C1F2';
const red = '#FC6E3D'; 

const cinza = "#4F4F4F";

// Antigo yellow #FFAB08

const MenuPrincipal = () => {
  return(
    <>
    <BlockDesktop>
      <ContainerMenuDesktop>
        <BrowserRouter >
          <Link className="links" to="/"><ItemMenuDesktop itemcolor={darkblue}>INÍCIO</ItemMenuDesktop></Link>
          <Link className="links" to="/mapa"><ItemMenuDesktop  itemcolor={pink}>MAPA</ItemMenuDesktop></Link>
          <ItemMenuDesktop  itemcolor={yellow}>EVENTOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={green}>CONTATOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={blue}>DOCUMENTOS</ItemMenuDesktop>
          <ItemMenuDesktop  itemcolor={red}>PROJETOS</ItemMenuDesktop>
          <Link className="links" to="/equipe"><ItemMenuDesktop  itemcolor={darkblue}>EQUIPE</ItemMenuDesktop></Link>
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


export default MenuPrincipal;
