import styled from 'styled-components';
import EventCard from '../components/event-card';
import { Row, Col, SuperTitle } from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import React, { useContext } from 'react';

const EventsPosts= () => {
  const context = useContext(MyContext);
  return(
        <Col gap="40px" padding="50px">
          <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}>Acompanhe os últimos eventos realizados pela SUEF!</SuperTitle>
            <Row gap="20px">
            <EventCard
             tipo={"FORMAÇÃO"}
              title={"FORMAÇÃO TAL"} 
              resume={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública."}
            />
            <EventCard
              tipo={"EVENTO"}
              title={"EVENTO TAL E TAL"} 
              resume={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública."}
            />
            </Row>
        </Col>
  );
}

export default EventsPosts;