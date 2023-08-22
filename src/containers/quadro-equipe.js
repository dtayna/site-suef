import styled from 'styled-components';
import ProfileFrame from '../components/profile-frame';

const ContainerQuadros = styled.section`
    padding: 50px;
    display: flex;
    justify-content: space-around;
    gap: 40px;
    align-items: center;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const QuadroEquipe = () => {
  return(
        <ContainerQuadros>
            <Row>
                <ProfileFrame/>
                <ProfileFrame/>
                <ProfileFrame/>
                <ProfileFrame/>
            </Row>
            <Row>
                <ProfileFrame/>
                <ProfileFrame/>
                <ProfileFrame/>
                <ProfileFrame/>
            </Row>
        </ContainerQuadros>
  );
}

export default QuadroEquipe;