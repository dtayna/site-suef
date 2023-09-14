import '../assets/mapa.css';
import { ReactComponent as Mapa }  from '../assets/svg/mapa.svg';
import styled from 'styled-components';
import MapGraph from './map-graph';
import Popup from './popup';
import React, { useState } from 'react';
import { SuperTitle } from './global-components';
import MapSVG from '../assets/map-svg';

//mapa component: onClick={() => props.activatePopup("natal")}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;


export const Map = () => {

function activatePopup (cidade, quantidades) {
    setCity(cidade);
    setActive(true); 
    setData({labels: ['1º ano', '2º ano', '3º ano','4º ano', '5º ano', '6º ano', '7º ano', '8º ano','9º ano'],
            datasets: [
                {
                  label: 'Alunos matriculados.',
                  data: quantidades,
                  backgroundColor: [
                    '#003453',
                    '#FC6E3D',
                    '#FFAB08',
                    '#003453',
                    '#FC6E3D',
                    '#FFAB08',
                    '#003453',
                    '#FC6E3D',
                    '#FFAB08',
                  ],
                  borderWidth: 1,
                }
            ]
    });
};

function desactivatePopup () {
    setActive(false);
};

const [active,setActive] = useState(false);
const [city,setCity] = useState("");
const [data, setData] = useState({
  labels: ['1º ano', '2º ano', '3º ano','4º ano', '5º ano', '6º ano', '7º ano', '8º ano','9º ano'],
        datasets: [
            {
              label: 'Alunos matriculados.',
              data: [],
              backgroundColor: [
                '#003453',
                '#FC6E3D',
                '#FFAB08',
                '#003453',
                '#FC6E3D',
                '#FFAB08',
                '#003453',
                '#FC6E3D',
                '#FFAB08',
              ],
              borderWidth: 1,
            }
        ]
});


    return(
    <Container>
      <SuperTitle color="var(--mainColor1)">Ensino Fundamental no Rio Grande do Norte</SuperTitle>
      <MapSVG activatePopup={activatePopup}></MapSVG>
      <MapGraph desactivatePopup={desactivatePopup} chartData={data} city={city} active={active}/>
    </Container>
    );
  }


  
  export default Map;