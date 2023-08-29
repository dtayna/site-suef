import styled from 'styled-components';
import '../styles/global.css';
import MapGraph from './map-graph';

const Container = styled.div`
    background-color: white;
    max-width: 600px;
    border-radius: 5px;
    margin: 30px;
    box-shadow: var(--grayBoxShadow);
    box-sizing: border-box;
    position: fixed;
    min-height: 350px;
    min-width: 80%;
`;


export const Popup = ({conteudo}) => {
  return (
    <Container>
        {conteudo}
    </Container>
  );
};



export default Popup;