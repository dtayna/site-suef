import styled from 'styled-components';
import { MdLocationOn , MdPhone, MdMailOutline } from 'react-icons/md';
import UrlLogoRN from '../assets/svg/brasaoRN.svg';
import { Text , Icon , Line , BlockSmartphone } from '../components/global-components';


//Just Responsiveness

const StartToCenter = styled.div`
    text-align: start;
    
    @media screen and (max-width: 734px) {
        text-align: center;
     }
`;

//Containers

const Container = styled.footer`
    position: relative;
    left: 0;
    margin-bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: var(--mainColor1);
    color: white; 
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px 20px 30px;
    min-width: 300px;
    max-width: 300px;
`;

const SubItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 15px;

    @media screen and (max-width: 734px) {
        justify-content: center;
     }
`;

//Components

const LogoRN = styled.img`
    max-width: 70px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;


const Footer = () => {
    return(
        <Container>
            <Item>
                <StartToCenter><h3> SUBCOORDENADORIA DO ENSINO FUNDAMENTAL</h3></StartToCenter>
                <StartToCenter><Text color="white" fontWeight="50">CODESE - Coordenadoria do Desenvolvimento Escolar</Text></StartToCenter>
                <BlockSmartphone>
                    <Line linecolor={"white"} linewidth={"100%"} lineborder={"1px solid white"}/>
                </BlockSmartphone>
            </Item>
            <Item>
                <SubItem>
                    <Icon>
                        <MdLocationOn/>
                    </Icon>
                    <StartToCenter>
                        <Text color="white" fontWeight="50">
                            Centro Administrativo do Estado - Av. Senador Salgado Filho, s/n, Lagoa Nova - Natal/RN. CEP: 59064-901
                        </Text>
                    </StartToCenter>
                </SubItem>
                <SubItem>
                    <Icon>
                        <MdMailOutline/>
                    </Icon>
                    <StartToCenter>
                        <Text color="white" fontWeight="50">
                            E-mail: algumacoisa@gmail.com
                        </Text>
                    </StartToCenter>
                </SubItem>
                <SubItem>
                    <Icon>
                        <MdPhone/>
                    </Icon>
                    <StartToCenter>
                        <Text color="white" fontWeight="50">
                            Tel.: (84) 3232-0000
                        </Text>
                    </StartToCenter>
                </SubItem>
                <BlockSmartphone>
                    <Line linecolor={"white"} linewidth={"100%"} lineborder={"1px solid white"}/>
                </BlockSmartphone>
            </Item>
            <Item>
                <StartToCenter> 
                    <LogoRN src={UrlLogoRN}/>
                
                <Text color="white" fontWeight="50">Secretaria de Estado da Educação, da Cultura, do Esporte e do Lazer - SEEC\RN</Text>
                </StartToCenter>
            </Item>
            
        </Container>
    );
  }
  
  
  export default Footer;