import '../assets/svg/mapa.css';
import { ReactComponent as Mapa }  from '../assets/svg/mapa.svg';
import styled from 'styled-components';

const ContainerMapa = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
`;


const MapSVG = () => {
    return(
    <ContainerMapa>
      <Mapa/>
    </ContainerMapa>
    );
  }
  
  
  export default MapSVG;