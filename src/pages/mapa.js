import styled from 'styled-components';
import Map from '../components/map';
import DataDirec from '../components/data-direc';
import InfoDirecs from '../containers/info-direcs';

const Container = styled.div`
  padding: 50px 20px 20px 20px;

  @media screen and (max-width: 734px) {
    padding: 50px 30px 30px 30px;
  }

`;

const Mapa = () => {
  return(
        <Container>
            <Map/>
            <InfoDirecs/>
        </Container>
  );
}


export default Mapa;