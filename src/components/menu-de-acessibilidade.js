import styled from 'styled-components';
import { MdOutlineTextDecrease, MdOutlineTextIncrease, MdContrast, MdAccessibility } from 'react-icons/md';
import { RiInstagramLine , RiYoutubeFill } from 'react-icons/ri';

const ItemMenu = styled.div`
  background: transparent;
  color: white;
  padding: 5px 10px 5px 10px;
  margin: 0px;
  font-size: 1.5em;
`;

const ContainerMenu = styled.div`
 
  display: flex;
  justify-content: right;
  padding-right: 5%;
  background-color: #003453;
`;

const MenuDeAcessibilidade = () => {
    return(
      <ContainerMenu>
      <ItemMenu><MdContrast/></ItemMenu>
      <ItemMenu> <MdOutlineTextDecrease/> </ItemMenu>
      <ItemMenu> <MdOutlineTextIncrease/> </ItemMenu>
      <ItemMenu> </ItemMenu>
      <ItemMenu> <RiInstagramLine/></ItemMenu>
      <ItemMenu> <RiYoutubeFill/></ItemMenu>
      </ContainerMenu>
      
    );
  }

export default MenuDeAcessibilidade;