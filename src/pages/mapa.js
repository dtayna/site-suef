import styled from 'styled-components';
import Map from '../components/map';
import DataDirec from '../components/data-direc';
import InfoDirecs from '../containers/info-direcs';
const Mapa = () => {
  return(
        <div>
            <Map/>
            <InfoDirecs/>
        </div>
  );
}


export default Mapa;