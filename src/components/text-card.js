import styled from 'styled-components';
import { Text , Line } from './global-components';

const DivTitle = styled.div`
    margin: 0;
    padding: 20px;
    background-color: var(--mainColor2);
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
    background-color: white;
    max-width: 500px;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
`; 

const  TextCard = (props) => {
    return( 
        <>
        
        <Container>
            {props.tipo=="primario"
            ?<DivTitle>
                <Title>{props.title}</Title>
            </DivTitle>
            :<><Title colortitle={"var(--mainColor2)"}>{props.title}</Title>
            <Line/>
            </>
            }
            <DivText>
                <Text fontFamily={"'Montserrat',sans-serif"}>{props.text}</Text>
            </DivText>
        </Container>
        
        </>
          
    );
  }
  
  
export default TextCard;