import styled from 'styled-components';
import TeamRoster from '../containers/team-roster';
import { Col, Row , Text } from '../components/global-components';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import React, { useState} from 'react';

const Container = styled.div`
    padding: 30px 10px 30px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 94%;
    border-bottom: var(--lightBorder);

    &:hover {
        background-color: #ebebeb;
        transition-duration: 0.7s, 0.7s;
    }
`; 

const Question = styled.div`
    font-weight: bold;
    color: var(--colorText);

   
`;

const Awnser = styled.div`
    text-align: left;
    padding: 30px 10px 30px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 94%;
    display: ${props => props.clicado ? props.clicado : "none"};
`;

const Icon = styled.div`
    font-weight: bold;
    text-align: right;
    float: right;
`;


const FaqItem = ({question, awnser}) => {

    function expandAwnser() {
        if (click=="none"){
          console.log("cheguei aqui");
          setClick("block");
        }else{
          setClick("none");
        }
      }
    
    const [click,setClick] = useState("none");

    return(
        <>
            <Container  onClick={expandAwnser}>
            <Question> {question} </Question>
            <Icon>
            {click=="none"?
                <BsChevronDown/>
                : <BsChevronUp/>
            }
            </Icon>
            </Container>
            <Awnser clicado={click}>
                <Text fontFamily={"'Montserrat',sans-serif"}>
                    {awnser}
               </Text>
            </Awnser>

        </>
     );
}
export default FaqItem;