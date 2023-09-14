import styled from 'styled-components';
import { MdOutlineTextDecrease, MdOutlineTextIncrease, MdContrast, MdAccessibility } from 'react-icons/md';
import { RiInstagramLine , RiYoutubeFill } from 'react-icons/ri';
import { Icon } from './global-components'

const Item = styled.div`
  background: transparent;
  padding: 5px 10px 5px 10px;
  margin: 0px;
`;

const Container = styled.nav`
  display: flex;
  justify-content: right;
  padding-right: 5%;
  background-color: var(--mainColor1);
`;
  

const AccessibilityMenu = () => {
    return(
      <Container>
        <Item>
          <Icon>
            <MdContrast/>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <MdOutlineTextDecrease/>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <MdOutlineTextIncrease/>
          </Icon>
        </Item>
        <Item></Item>
        <Item>
          <Icon>
            <RiInstagramLine/>
          </Icon>
        </Item>
        <Item>
          <Icon>
            <RiYoutubeFill/>
          </Icon>
        </Item>
      </Container>
    );
  }

export default AccessibilityMenu;