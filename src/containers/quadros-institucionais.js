import styled from 'styled-components';
import TextFrame from '../components/text-frame';

const ContainerQuadros = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

`;

const QuadrosInstitucionais = () => {
  return(
        <ContainerQuadros>
            <TextFrame 
              tipo={"primario"}
              primeiro={true}
              titulo={"SUBCOORDENADORIA DO ENSINO FUNDAMENTAL - SUEF/SEEC-RN"} 
              texto={"O Ensino Fundamental constitui a segunda etapa da Educação Básica. É obrigatório e gratuito na escola pública, com duração de 9 (nove) anos, iniciando-se aos 6 (seis) anos de idade, em conformidade ao art. 3º da LDB/96, organizado em anos iniciais e anos finais..."}
            />
            <TextFrame 
              tipo={"secundario"}
              primeiro={false}
              titulo={"MISSÃO"} 
              texto={"Assegurar uma educação que garanta o acesso, a permanência e o suceso dos estudantes."}
            />
            <TextFrame 
               tipo={"secundario"}
              primeiro={false}
              titulo={"VALORES"} 
              texto={"Credibilidade, compromisso, cooperação, competência, participação, confiança, ética e respeito."}
            />
            
        </ContainerQuadros>
  );
}
export default QuadrosInstitucionais;