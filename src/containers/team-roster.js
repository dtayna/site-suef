import styled from 'styled-components';
import ProfileCard from '../components/profile-card';
import { Row, Col } from '../components/global-components';

const TeamRoster = () => {
  return(
        <Col gap="40px" padding="50px">
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
  );
}

export default TeamRoster;