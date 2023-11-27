import styled from 'styled-components';
import UrlProfileImage from '../assets/perfilexemplo.jpeg';
import { MyContext } from '../utils/useContext.js';
import React, { useContext } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 20px 20px;
    max-width: 150px;
    border-radius: 5px;
    box-shadow: 1px 2px 2px var(--grayShadow);
    text-wrap: wrap !important;
    border-bottom: 4px solid var(--mainColor1);
`;

const Image = styled.img`
    width: 100px;
    max-height: 100px;
    object-fit: cover;
    object-position: 100% 10%;
    border-radius: 50%;
  
   
`;
//  border: 2px solid white;
const DivImage = styled.div`
    width: 100px;
    padding: 5px;
    max-height: 100px;
    border-radius: 50% 50% 50% 50%;
    background-color: white;
    border-top: 4px solid var(--mainColor1);
    border-left: 4px solid var(--mainColor1);
   
`;

const Name = styled.h4`
    color: var(--colorTitle);
`;

const Office = styled.h5`
    font-size: 0.8em;
    color: var(--colorSubtitle);
    margin-top: -20px;
`;

const Description = styled.p`
    
    margin-top: 0px;
    color: var(--colorText);
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: var(--font-size);
`;

const  ProfileCard = (props) => {
    const context = useContext(MyContext);
    console.log(props.foto);
    return( 
        <>
        <Container style={{
        backgroundColor: context.contrastebg == 'black' ? 'white' : 'var(--blacklight)',
            }}> 
            <DivImage>
            <Image src={props.foto}></Image>
            </DivImage>
            <Name>{props.nome}</Name>
            <Office>{props.funcao}</Office>
            <Description style={{
        color: context.contrastebg == 'black' ? 'var(--colorText)' : 'white',
            }}> blabla</Description>
        </Container>
        
        </>
          
    );
  }
  
  
export default ProfileCard;
