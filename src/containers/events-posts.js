import styled from 'styled-components';
import EventCard from '../components/event-card';
import { Row, Col, SuperTitle } from '../components/global-components';

const EventsPosts= () => {
  return(
        <Col gap="40px" padding="50px">
          <SuperTitle color={"var(--mainColor1)"}>Acompanhe os últimos eventos realizados pela SUEF!</SuperTitle>
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