import styled from 'styled-components';
import { SuperTitle , Title, Col, Row } from '../components/global-components';
import React, { useState} from 'react';
import SelectEscolas from '../components/select-escolas';
import PizzaGraph from '../components/pizza-graph';
import BarGraph from '../components/bar-graph';


const GraphCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 400px;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
`;


const Indicadores = () => {
const queryParameters = new URLSearchParams(window.location.search);
const city = queryParameters.get("cidade");

  return(
        <Col justify={"center"} align={"center"} padding={"50px 0px 0px 0px"}> 
            <SuperTitle color={"var(--mainColor1)"}> {city} </SuperTitle>
            <SelectEscolas city={city}/>
            <Title> Total De Matrículas 2023 </Title>
            <Row justify={"center"} align={"center"}>
               <GraphCard> <PizzaGraph/> </GraphCard>
               <GraphCard> <PizzaGraph/> </GraphCard>
               <GraphCard> <BarGraph/> </GraphCard>
            </Row>
            <Title> Indicadores Internos </Title>
            <Row justify={"center"} align={"center"}>
               <GraphCard> <PizzaGraph/> </GraphCard>
               <GraphCard> <PizzaGraph/> </GraphCard>
               <GraphCard> <BarGraph/> </GraphCard>
            </Row>
            <Title> Indicadores Externos </Title>
            <Title> Metas Sugeridas para a Escola </Title>
        </Col>
  );
}
export default Indicadores;