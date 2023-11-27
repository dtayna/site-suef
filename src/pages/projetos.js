import styled from 'styled-components';
import TeamRoster from '../containers/team-roster';
import { SuperTitle , Col, Text, Row, Title, BlockDesktop, BlockTabletSmartphone} from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import { useState, useContext } from 'react';
import TextCard from '../components/text-card';
import ImagemItem from '../components/imagem-item';
import programas from '../utils/programas.json';

const Galeria = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Projeto = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const projeto = queryParameters.get("projeto");
    const context = useContext(MyContext);

    const [jsonPrograma, setJsonPrograma] = useState(programas.programas[projeto]);

    let titulo ="";
    let texto = "";
    let equipe ="";
    let adesao = "";
    let galeria = [];

    if (jsonPrograma != undefined){
        titulo = jsonPrograma.titulo;
        texto = jsonPrograma.texto;
        equipe = jsonPrograma.equipe;
        adesao = jsonPrograma.adesao;
        galeria = jsonPrograma.galeria;
    }   
    
    const listImagensDesk = galeria.map(imagem =>
      <ImagemItem height={'250px'} width={'250px'} maxwidth={'300px'} imagem={imagem}/>
    );

    const listImagensSmart = galeria.map(imagem =>
      <ImagemItem height={'100px'} width={'100px'} maxwidth={'100px'} imagem={imagem}/>
    );
  
    return(
      <>
          <Col gap="40px" padding="50px 50px 0px 50px">
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}>
            {titulo}
            </SuperTitle>
          </Col>


          <BlockDesktop>
          <Row maxwidth="90%" align="start" padding="0px 0px 0px 5%">
            <Col maxwidth="30%" >
            <ImagemItem height={'250px'} width={'95%'} maxwidth={'400px'} imagem={galeria[0]} radius={"5px"}/>
            <TextCard
                width={'100%'}
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
          <Col>
          <Row maxwidth="90%" padding="0px 0px 0px 0px">
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}>
               Galeria do Programa
                </SuperTitle>
          </Row>
          <Row maxwidth="90%">
            <Galeria>
            {listImagensDesk}
            </Galeria>
        </Row>
          </Col>
          </BlockDesktop>


          <BlockTabletSmartphone>
            <Col maxwidth="90%" align="center" padding="0px 0px 0% 2%">
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
              <TextCard
                tipo={"primario"}
                primeiro={true}
                title={"Equipe"} 
                text={equipe}
                />
            </Col>
            <Col>
          <Row maxwidth="90%">
            <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}> Galeria do Projeto </SuperTitle>
          </Row>
          <Row maxwidth="90%">
            <Galeria>
            {listImagensSmart}
            </Galeria>
        </Row>
          </Col>
          </BlockTabletSmartphone>


          </>      
        
  );
}
export default Projeto;