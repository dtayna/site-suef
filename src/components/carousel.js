import styled from 'styled-components';
import URLimagemteste from '../assets/imagemteste.png';

const CarrosselContainer = styled.div`
   width: 100%;
   height: 400px;
   background-color:  #ffd976;
   display: flex;
   justify-content: center;
`;

const Imagem1 = styled.img`
    max-height: 400px;
`;


const Carousel = () => {
    return(
        <CarrosselContainer >
            <Imagem1 src={URLimagemteste}/>
        </CarrosselContainer>
    
    );
  }
  
  
  export default Carousel;