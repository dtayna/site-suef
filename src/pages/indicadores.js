import styled from 'styled-components';
import { SuperTitle , Title, Col, Row } from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import React, { useState , useContext } from 'react';
import SelectEscolas from '../components/select-escolas';
import { Grafico } from '../components/grafico';

const GraphCard = styled.div`
    word-break: break-word;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 400px;
    min-width: 300px;
    max-width: 300px;
    text-wrap: wrap !important;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
`;

const BigGraphCard = styled.div`
    word-break: break-word;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 400px;
    min-width: 300px;
    max-width: 1000px;
    width: 100%;
    text-wrap: wrap !important;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
`;


const Indicadores = () => {

const queryParameters = new URLSearchParams(window.location.search);
const city = queryParameters.get("cidade");

const dataMatriculas = {
        labels: ['1º ano', '2º ano', '3º ano','4º ano', '5º ano', '6º ano', '7º ano', '8º ano','9º ano'],
        datasets: [
            {
              label: 'Alunos matriculados.',
              data: [200, 300, 400, 200, 200, 300, 400, 230, 431],
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
        ],
        
};

const dataTurno = {
  datasets: [{
      label: ['Matutino', 'Vespertino', 'Integral'],
      data: [10, 20, 30],
      backgroundColor: ['#003453','#FC6E3D','#FFAB08',],
      },
  ],
  labels: [
      'Matutino',
      'Vespertino',
      'Integral'
  ], 
};
const context = useContext(MyContext);

  return(
        <Col justify={"center"} align={"center"} padding={"50px 0px 0px 0px"}> 
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}> {city} </SuperTitle>
            <SelectEscolas city={city}/>
            <Title> Total De Matrículas 2023 </Title>
            <Row justify={"center"} align={"center"}>
               <GraphCard> <Grafico tipo={'Bar'} titulo={"Total de Matrículas"} subtitulo={"Testes"} dados={dataMatriculas}/> </GraphCard>
               <GraphCard> <Grafico tipo={'Pie'} subtitulo={"Matrículas por Turno"} titulo={"Testes"} dados={dataTurno}/> </GraphCard>
               <GraphCard> <Grafico tipo={'Pie'} subtitulo={"Matrículas por Turno"} titulo={"Testes"} dados={dataTurno}/> </GraphCard>
   
               </Row>
            <Title> Indicadores Internos </Title>
            <Row justify={"center"} align={"center"}>
            <GraphCard> 
              <Grafico tipo={'Bar'} subtitulo={"Ensino Fundamental - RN - 2023"} titulo={"Testes"} dados={dataMatriculas}/> 
            </GraphCard>
               <GraphCard> <Grafico tipo={'d'} subtitulo={"Ensino Fundamental - RN - 2023"} titulo={"Testes"} dados={dataMatriculas}/> </GraphCard>
               <GraphCard> <Grafico tipo={'Pie'} subtitulo={"Ensino Fundamental - RN - 2023"} titulo={"Testes"} dados={dataMatriculas}/></GraphCard>
            </Row>
            <Title> Indicadores Externos e Metas Sugeridas para a Escola </Title>
            <Row>
            <BigGraphCard>
            <Grafico tipo={'Line'} subtitulo={"Ensino Fundamental - RN - 2023"} titulo={"Testes"} dados={dataMatriculas}/>

            </BigGraphCard>
            </Row>
        </Col>
  );
}
export default Indicadores;