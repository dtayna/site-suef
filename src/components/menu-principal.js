import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import '../styles/global.css';

const ItemMenu = styled.div`
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

const ContainerMenu = styled.div`
  transparent;
  display: flex;
  justify-content: center;
`;

const itemcolor = {};
const darkblue = '#003453';
const pink = '#C65F9E';
const yellow = '#FFAB08';
const green = '#B9C73A';
const blue = '#57C1F2';
const red = '#FC6E3D'; 

// Antigo yellow #FFAB08

const MenuPrincipal = () => {
  return(
    <ContainerMenu>
      <BrowserRouter >
      <Link className="links" to="/"><ItemMenu itemcolor={darkblue}>INÍCIO</ItemMenu></Link>
      <Link className="links" to="/mapa"><ItemMenu  itemcolor={pink}>MAPA</ItemMenu></Link>
      <ItemMenu  itemcolor={yellow}>EVENTOS</ItemMenu>
      <ItemMenu  itemcolor={green}>CONTATOS</ItemMenu>
      <ItemMenu  itemcolor={blue}>DOCUMENTOS</ItemMenu>
      <ItemMenu  itemcolor={red}>PROJETOS</ItemMenu>
      <Link className="links" to="/equipe"><ItemMenu  itemcolor={darkblue}>EQUIPE</ItemMenu></Link>
      </BrowserRouter>
    </ContainerMenu>
    
  );
}


export default MenuPrincipal;
