import styled from 'styled-components';
import URLimagemteste from '../assets/imagemteste.jpg';

const CarrosselContainer = styled.div`
    width: 100%;
    height: 400px;
    max-height: 400px;
    display: flex;
    justify-content: center;
`;

const Imagem1 = styled.div`
    padding: 50px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    height: 400px;
    background: lightblue url("../imagemteste.jpg") no-repeat center;
    background-size: cover;
    box-shadow: inset 0px -300px 100px rgb(0 0 0 / 80%);
`;

const SubTitle = styled.p`   
    margin: 0px 0px 0px 0px;  
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
    opacity : 0.9;
   
`;

const Title = styled.p`
    margin: 0px 0px 5px 0px;  
    text-align: center;
    font-size: 6em;
    font-weight: bold;
    color: white;
    opacity : 1;
    text-wrap: wrap;
    transition-duration: 0.7s, 0.7s;

    &:hover {
        transform: scale(1.1);
        transition-duration: 0.7s, 0.7s;
    }

    @media screen and (max-width: 734px) {
        font-size: 4em;
    }

    @media screen and (max-width: 280px) {
        font-size: 2em;
    }
`;


const Carousel = () => {
    return(
        <CarrosselContainer >
           <Imagem1>
               <Title>
                   EVENTO TAL
               </Title>
               <SubTitle>
                   Subcoordenadoria do Ensino Fundamental - 23/08/2023
               </SubTitle>
           </Imagem1>
        </CarrosselContainer>
    
    );
  }
  
  
  export default Carousel;