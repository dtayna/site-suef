import styled from 'styled-components';
import ProfileCard from '../components/profile-card';
import { Row, Col , SuperTitle } from '../components/global-components';

const Container = styled.div`
    margin-top:0px;
    padding-top: 50px;
`;

const TeamRoster = () => {
  return(
        <Container>
            <SuperTitle color="var(--mainColor1)">Conheça nossa Equipe!</SuperTitle>
            <Col gap="40px" padding="20px">
                <Row gap="20px">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </Row>
                <Row gap="20px">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </Row>
            </Col>
        </Container>
  );
}

export default TeamRoster;