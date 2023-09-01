import styled from 'styled-components';
import EventCard from '../components/event-card';
import { Row, Col } from '../components/global-components';

const EventsPosts= () => {
  return(
        <Col gap="40px" padding="50px">
            <Row gap="20px">
                <EventCard  tipo={"FORMAÇÃO"}
              title={"EVENTO TAL E TAL"} 
              resume={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública."}
            />
            </Row>
        </Col>
  );
}

export default EventsPosts;