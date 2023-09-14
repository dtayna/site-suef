import styled from 'styled-components';
import URLimagemteste from '../assets/imagemteste.jpg';
import { BsChevronLeft, BsChevronRight} from 'react-icons/bs';

const CarrosselContainer = styled.div`
    width: 100%;
    height: 400px;
    max-height: 400px;
    display: flex;
    justify-content: center;
`;

// height: 400px;

const Imagem1 = styled.div`
    padding: 50px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    
    margin-top: 30px;
    height: 300px;
    background-image: linear-gradient(to right, var(--mainColor1), var(--mainColor2));
    color: var(--mainColor1);    
   

    @media screen and (max-width: 734px) {
        padding: 20px;
    }
`;

/*
degrade
margin-top: 30px;
height: 300px;
background-image: linear-gradient(to right, var(--mainColor1), var(--mainColor2));
color: var(--mainColor1);


por do sol
height: 300px;
background-image: linear-gradient(to right, var(--mainColor2), #ffa500);
color: var(--mainColor1);


foto

 height: 400px;
    background-size: cover !important;
    background: lightblue url("../imagemteste.jpg") no-repeat center;
    box-shadow: inset 0px -300px 100px rgb(0 0 0 / 80%); 

height: 400px;
background-size: cover;
background: lightblue url("../imagemteste.jpg") no-repeat center;
box-shadow: inset 0px -300px 100px rgb(0 0 0 / 80%);
*/

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
`;

const ColL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;
    font-size: 2em;
    opacity: 0.7;
    padding: 5px;
    border-radius: 50%;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
        transition-duration: 0.7s, 0.7s;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const ColC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ColR = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: end;
    color: white;
    font-size: 2em;
    opacity: 0.7;

    padding: 5px;
    border-radius: 50%;
    
    &:hover {
        opacity: 1;
        transform: scale(1.1);
        transition-duration: 0.7s, 0.7s;
        background-color: rgba(255, 255, 255, 0.2);
    }

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
               <Row>
                   <ColL><BsChevronLeft/></ColL>
                   <ColC>
                        <Title>
                            EVENTO TAL
                        </Title>
                        <SubTitle>
                            Subcoordenadoria do Ensino Fundamental 
                        </SubTitle>
                    </ColC>
               <ColR><BsChevronRight/></ColR>
               </Row>
               
           </Imagem1>
        </CarrosselContainer>
    
    );
  }
  
  
  export default Carousel;