import styled from 'styled-components';
import { Text , Line } from './global-components';
import { MyContext } from '../utils/useContext.js';
import { useContext } from 'react';


const DivTitle = styled.div`
    margin: 0;
    padding: 20px;
    background-color: var(--mainColor1);
    border-radius: 5px 5px 0px 0px;
`;

const DivText = styled.div`
    padding: 20px 30px 30px 30px;
`;

const Title = styled.h3`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: ${props => props.colortitle ? props.colortitle : "white"};
`; 


const Container = styled.div`
    max-width: 500px;
    width: 95%;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
`; 



//var(--background-color);

const  TextCard = (props) => {

const context = useContext(MyContext);

    return( 
        <>
        
        <Container style={{
        backgroundColor: context.contrastebg == 'black' ? 'white' : 'var(--blacklight)',
            }}>

            {props.tipo=="primario"
            ?<DivTitle>
                <Title>{props.title}</Title>
            </DivTitle>
            :<><Title colortitle={"var(--mainColor2)"} >{props.title}</Title>
            <Line/>
            </>
            }
            <DivText>
                <Text indent="0" align="center" fontFamily={"'Montserrat',sans-serif"}>{props.text}</Text>
            </DivText>
        </Container>
        
        </>
          
    );
  }
  
  
export default TextCard;