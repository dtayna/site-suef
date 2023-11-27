import styled from 'styled-components';
import { SuperTitle , Col, Row } from '../components/global-components';
import FaqItem from '../components/faq-item';
import faq from '../utils/faq.json';
import { MyContext } from '../utils/useContext.js';
import React, { useState , useContext } from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--grayBoxShadow);

`;


const Duvidas = () => {

  const [jsonFaq, setJsonFaq] = useState(faq);
  const context = useContext(MyContext);
  const questionslist = jsonFaq.faq.map(f =>
    <FaqItem question = {f.pergunta} awnser = {f.resposta}/>
  );

  return(
        <Col padding={"50px"}> 
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}> Dúvidas Frequentes: </SuperTitle>
            <br/>
            <Container style={{
        backgroundColor: context.contrastebg == 'black' ? 'white' : 'var(--blacklight)',
            }} >
             {questionslist}
            </Container>
        </Col>
  );
}
export default Duvidas;