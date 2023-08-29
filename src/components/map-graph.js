import styled from 'styled-components';
import '../styles/global.css';
import { MdClose , MdOutlineArrowForward } from 'react-icons/md';
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import { IconClose , Title , Link } from './global-components';
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
      <Link href="https://saogoncalo.rn.gov.br/"> {city} <MdOutlineArrowForward/> </Link>
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