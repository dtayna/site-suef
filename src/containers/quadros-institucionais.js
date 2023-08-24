import styled from 'styled-components';
import TextCard from '../components/text-card';

const ContainerQuadros = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;

  @media screen and (max-width: 734px) {
    flex-direction: column;
  }
`;

const ContainerCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const QuadrosInstitucionais = () => {
  return(
        <ContainerQuadros>
          <ContainerCol>
            <TextCard
              tipo={"primario"}
              primeiro={true}
              titulo={"SUBCOORDENADORIA DO ENSINO FUNDAMENTAL - SUEF/SEEC-RN"} 
              texto={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública, com duração de 9 (nove) anos, iniciando-se aos 6 (seis) anos de idade, em conformidade ao art. 3º da LDB/96, organizado em anos iniciais e anos finais..."}
            />
            </ContainerCol>
            <ContainerCol>
            <TextCard
              tipo={"primari"}
              primeiro={false}
              titulo={"MISSÃO"} 
              texto={"Assegurar uma educação que garanta o acesso, a permanência e o suceso dos estudantes."}
            />
            <TextCard
               tipo={"primario"}
              primeiro={false}
              titulo={"VALORES"} 
              texto={"Credibilidade, compromisso, cooperação, competência, participação, confiança, ética e respeito."}
            />
            </ContainerCol>
        </ContainerQuadros>
  );
}
export default QuadrosInstitucionais;