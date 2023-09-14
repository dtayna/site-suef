import styled from 'styled-components';
import DataDirec from '../components/data-direc';
import { Row, Col, SuperTitle } from '../components/global-components';
import direcs from '../utils/direcs.json';
import React, { useState } from 'react';


const Container = styled.div`
    padding: 5%;
`;




const InfoDirecs= () => {
const [jsonDirecs, setJsonDirecs] = useState(direcs);

console.log(jsonDirecs.direcs[0].diretor);

const list = jsonDirecs.direcs.map(direc =>
    <Col maxwidth={"550px"}>
        <DataDirec direc={direc.titulo} 
                diretor={direc.diretor}
                local={direc.localizacao}
                email={direc.email}
                telefones={direc.telefones}
        />
    </Col>
  );

  return(
      <Container>
          <SuperTitle color={"var(--mainColor1)"}>Diretorias Regionais</SuperTitle>
        <Row>
            {list} 
        </Row>
    </Container>
  );
}

export default InfoDirecs;