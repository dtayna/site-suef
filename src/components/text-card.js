import styled from 'styled-components';
import { Text } from './global-components';

const DivTitulo = styled.div`
    margin: 0;
    padding: 20px;
    background-color: var(--mainColor2);
    border-radius: 5px 5px 0px 0px;
`;

const DivTexto = styled.div`
    padding: 20px 30px 30px 30px;
`;

const Titulo = styled.h3`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: ${props => props.corTitulo};
`; 

// bordinha em caso de background branco border: 1px solid #e1e1e1; 

const Quadro = styled.div`
    background-color: white;
    max-width: 500px;
    border-radius: 5px;
    margin: 30px;
    box-shadow: 1px 2px 2px var(--grayShadow);
`; 


const Linha = styled.hr`
    width: 90%;
    margin-bottom: 0;
    border-top: 2px solid var(--mainColor2);
`;

const corTitulo = {};
const Tipo = {};

//Antiga cor titulo corTitulo="#4F4F4F"

const  TextCard = (props) => {
    return( 
        <>
        
        <Quadro>
            {props.tipo=="primario"
            ?<DivTitulo><Titulo corTitulo="white">{props.titulo}</Titulo></DivTitulo>
            :<><Titulo corTitulo="var(--mainColor2)">{props.titulo}</Titulo><Linha></Linha></>
            }
            <DivTexto><Text fontFamily="'Montserrat',sans-serif">{props.texto}</Text></DivTexto>
        </Quadro>
        
        </>
          
    );
  }
  
  
export default TextCard;