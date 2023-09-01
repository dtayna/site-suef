import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 300px;  
  margin-top: 0;
  margin-left: 0; 
  background-color: var(--mainColor2);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  color: white;
`;

const SideMenu = () => {
    return(
      <Container>Teste blabla</Container>
    );
  }

export default SideMenu;