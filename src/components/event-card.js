import styled from 'styled-components';
import { Line } from './global-components';
import React, { useState } from 'react';

const DivTitle = styled.div`   
    box-shadow: inset 0px -150px 50px rgb(0 0 0 / 80%);
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content:end; 
    margin: 0;
    padding: 30px;
    background: lightblue ${props => props.imagem != 'url(\"\")'? props.imagem : 'url(\"./imagemteste.jpg\")'} no-repeat 50% 10%;
    border-radius: 5px 5px 0px 0px;
`;

const Text = styled.p`
    font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "200"};
    text-align: left;
    color: ${props => props.color? props.color : "white"};
`;

const SubTitle = styled.p`   
    margin: 0px 0px 0px 2px;  
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    color: white;
    opacity : 0.9;
   
`;

const Title = styled.p`
    margin: 0px 0px 5px 0px;  
    text-align: left;
    font-size: 2em;
    font-weight: bold;
    color: white;
    opacity : 1;
    text-wrap: wrap;
`;

// text-shadow: 1px 2px 3px #000;

const DivText = styled.div`
    padding: 15px 30px 30px 30px;
`;

const Container = styled.div`
    min-width: 250px;
    width: 500px;
    background-color:  ${props => props.backgroundcolor? props.backgroundcolor : "white"};
    max-width: 500px;
    border-radius: 5px;
    margin: 0px 25px 30px 25px;
    box-shadow: var(--grayBoxShadow);
    transition-duration: 0.5s, 0.5s;

    &:hover {
        transform: scale(0.97);
        transition-duration: 0.5s, 0.5s;
    }
    
`; 

let bgcolor = "white";

const  EventCard = (props) => {

    if (props.cor =="1"){
        bgcolor = "var(--mainColor1)";
    }else{
        bgcolor = "var(--mainColor2)";
    }

    return( 
        <>
        <Container backgroundcolor={bgcolor}>
            <DivTitle imagem={'url(\"'+props.imagem+'\")'}>
            <Title>{props.title}</Title>
            <SubTitle>{props.tipo}</SubTitle>
           </DivTitle>
            <DivText>
               <Text fontFamily={"'Montserrat',sans-serif"} color={"white"}>{props.resume}</Text>
            </DivText>
        </Container>
        </>  
    );
  }
  
  
export default EventCard;