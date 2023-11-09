import styled from 'styled-components';
import { Title, SubTitle, Text, Line } from './global-components';
import { MyContext } from '../utils/useContext.js';
import { useContext } from 'react';

const Container = styled.div`
    width: 550px;
    text-align: left;

    @media screen and (max-width: 734px) {
        width: 95%;
    }
`;
  

const DataDirec = ({direc, diretor, local, email, telefones}) => {
  const context = useContext(MyContext);
    return(
      <Container>
        <Title style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white'}}> {direc} </Title>
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