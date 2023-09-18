import styled from 'styled-components';
import { MdClose , MdOutlineArrowForward } from 'react-icons/md';
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import { Link } from 'react-router-dom';
import { LinkGraph, IconClose , Title, SubTitle } from './global-components';
import React, { useState } from 'react';

const Container = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    z-index: 3;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    width: 80%;
    max-width: 600px;
    padding: 15px;
    border: var(--lightBorder);

`;

//box-shadow: var(--grayBoxShadow);

export const MapGraph = ({ chartData , city , active , desactivatePopup }) => {

  return (
    <Container show={active}>
      <IconClose onClick={() => desactivatePopup()}><MdClose/></IconClose>
      <Title color={'var(--mainColor1)'}>
        Matrículas em {city}
      </Title>
         <LinkGraph> 
            <Link to={"/indicadores?cidade="+city}> {city} <MdOutlineArrowForward/> </Link>
         </LinkGraph>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Ensino Fundamental - RN - 2023',
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </Container>
  );
};



export default MapGraph;