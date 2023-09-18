import styled from 'styled-components';
import TeamRoster from '../containers/team-roster';
import { SuperTitle , Col, Row } from '../components/global-components';
import FaqItem from '../components/faq-item';
import faq from '../utils/faq.json';
import React, { useState} from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  max-width: 1000px;
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--grayBoxShadow);

`;


const Duvidas = () => {

  const [jsonFaq, setJsonFaq] = useState(faq);

  const questionslist = jsonFaq.faq.map(f =>
    <FaqItem question = {f.pergunta} awnser = {f.resposta}/>
  );

  return(
        <Col padding={"50px"}> 
            <SuperTitle color={"var(--mainColor1)"}> Dúvidas Frequentes: </SuperTitle>
            <br/>
            <Container>
             {questionslist}
            </Container>
        </Col>
  );
}
export default Duvidas;