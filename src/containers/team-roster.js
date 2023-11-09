import styled from 'styled-components';
import ProfileCard from '../components/profile-card';
import { Row, Col , SuperTitle } from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import React, { useContext, useState } from 'react';
import equipe from '../utils/equipe.json';
import Equipe from '../pages/equipe';

const Container = styled.div`
    margin-top:0px;
    padding-top: 50px;
`;


const TeamRoster = () => {

    const [jsonEquipe, setJsonEquipe] = useState(equipe);
    var cont = 0;

    const list = jsonEquipe.equipe.map(equipe =>
        <ProfileCard foto={equipe.foto} nome={equipe.nome} funcao={equipe.funcao}/>
        
    );

  const context = useContext(MyContext);
  return(
        <Container>
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}>Conheça nossa Equipe!</SuperTitle>
            <Col gap="40px" padding="20px">
                <Row width="800px" gap="20px">
                    {list}
                </Row>
            </Col>
        </Container>
  );
}

export default TeamRoster;