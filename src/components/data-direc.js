import styled from 'styled-components';
import { Title, SubTitle, Text, Line } from './global-components'

const Container = styled.div`
    width: 550px;
    text-align: left;

    @media screen and (max-width: 734px) {
        width: 95%;
    }
`;
  

const DataDirec = ({direc, diretor, local, email, telefones}) => {
    return(
      <Container>
        <Title color={"var(--mainColor1)"}> {direc} </Title>
        <Line lineborder={"1px solid var(--colorSubtitle)"} linewidth={"100%"}/>
        <br/><br/>
        <SubTitle color={"var(--colorTitle)"}> {diretor} </SubTitle>
        <Text> {local} </Text>
        <Text> Email: {email} </Text>
        <Text> Telefones: {telefones}</Text>
      </Container>
    );
  }

export default DataDirec;