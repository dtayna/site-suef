import styled from 'styled-components';
import TextCard from '../components/text-card';
import { SuperTitle } from '../components/global-components';
import { MyContext } from '../utils/useContext.js';
import { useContext } from 'react';

const ContainerQuadros = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  @media screen and (max-width: 734px) {
    margin-top: 0px;
    flex-direction: column;
  }
`;

const ContainerCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const Container = styled.div`
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;

`;

const QuadrosInstitucionais = () => {

  const context = useContext(MyContext);
  return(
        <Container>
        <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}> Conheça a Subcoordenadoria do Ensino Fundamental do RN!</SuperTitle>
 
        <ContainerQuadros>
         
          <ContainerCol>
            <TextCard
              tipo={"primario"}
              primeiro={true}
              title={"SUBCOORDENADORIA DO ENSINO FUNDAMENTAL - SUEF/SEEC-RN"} 
              text={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública, com duração de 9 (nove) anos, iniciando-se aos 6 (seis) anos de idade, em conformidade ao art. 3º da LDB/96, organizado em anos iniciais e anos finais..."}
            />
            </ContainerCol>
            <ContainerCol>
            <TextCard
              tipo={"primario"}
              primeiro={false}
              title={"MISSÃO"} 
              text={"Assegurar uma educação que garanta o acesso, a permanência e o suceso dos estudantes."}
            />
            <TextCard
               tipo={"primario"}
              primeiro={false}
              title={"VALORES"} 
              text={"Credibilidade, compromisso, cooperação, competência, participação, confiança, ética e respeito."}
            />
            </ContainerCol>
        </ContainerQuadros>
        </Container>
  );
}
export default QuadrosInstitucionais;