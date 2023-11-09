import styled from 'styled-components';
import TeamRoster from '../containers/team-roster';
import { SuperTitle , Col, Text, Row, Title, BlockDesktop, BlockTabletSmartphone} from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import { useState, useContext } from 'react';
import TextCard from '../components/text-card';
import programas from '../utils/programas.json';

const Projeto = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const projeto = queryParameters.get("projeto");
    const context = useContext(MyContext);

    const [jsonPrograma, setJsonPrograma] = useState(programas.programas[projeto]);

    let titulo ="";
    let texto = "";
    let equipe ="";
    let adesao = "";

    if (jsonPrograma != undefined){
        titulo = jsonPrograma.titulo;
        texto = jsonPrograma.texto;
        equipe = jsonPrograma.equipe;
        adesao = jsonPrograma.adesao;
    }     
  
    return(
      <>
          <Col gap="40px" padding="50px 50px 0px 50px">
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}>
            {titulo}
            </SuperTitle>
          </Col>
          <BlockDesktop>
          <Row maxwidth="90%" align="start" padding="0px 0px 5% 5%">
            <Col maxwidth="30%" >
                <TextCard
                tipo={"primario"}
                primeiro={true}
                title={"Equipe"} 
                text={equipe}
                />
            </Col>
            <Col maxwidth="60%" align="start">
              <Text align="justify" indent="1.5em" height="1.5">
                {texto}
              </Text>
              { adesao != ""?
              <>
              <Title>
                Informações Sobre a Adesão ao Programa
              </Title>
              <Text align="justify" indent="1.5em" height="1.5">
                {adesao}
              </Text>
              </>:
              <></>
              }
            </Col>
          </Row>
          </BlockDesktop>
          <BlockTabletSmartphone>
            <Col maxwidth="90%" align="center" padding="0px 0px 5% 5%">
            <Text align="justify" indent="1.5em" height="1.5">
                {texto}
              </Text>
              <Title>
                Informações Sobre a Adesão ao Programa
              </Title>
              <Text align="justify" indent="1.5em" height="1.5">
                {adesao}
              </Text>
              <TextCard
                tipo={"primario"}
                primeiro={true}
                title={"Equipe"} 
                text={equipe}
                />
            </Col>
          </BlockTabletSmartphone>
          </>      
        
  );
}
export default Projeto;