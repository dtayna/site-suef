import styled from 'styled-components';
import DataDirec from '../components/data-direc';
import { Row, Col, SuperTitle } from '../components/global-components';
import direcs from '../utils/direcs.json';
import { MyContext } from '../utils/useContext.js';
import React, { useContext, useState } from 'react';


const Container = styled.div`
    padding-top: 30px;
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
  const context = useContext(MyContext);
  return(
      <Container>
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}>Diretorias Regionais de Educação e Cultura</SuperTitle>
            <br/>
        <Row>
            {list} 
        </Row>
    </Container>
  );
}

export default InfoDirecs;