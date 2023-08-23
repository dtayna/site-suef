import styled from 'styled-components';
import { MdLocationOn , MdPhone, MdMailOutline } from 'react-icons/md';
import UrlLogoRN from '../assets/svg/brasaoRN.svg';

const FooterContainer = styled.footer`
    position: relative;
    left: 0;
    margin-bottom: 0;
    width: 100%;
    background-color: #003453;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const ItemFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px 30px 30px;
    min-width: 300px;
    max-width: 300px;
    text-wrap: wrap;

    @media screen and (max-width: 700px) {
       border-bottom: 1px solid white;
    }
`;

const SubItemFooter = styled.div`
    text-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 15px;
`;

const LogosFooter = styled.div`
    font-size: 1.5em;
`;

const TextoItemStart = styled.p`
    text-align: start;
    font-weight: 100;
  
`;

const TextoItemCenter = styled.p`
    text-align: center;
    font-weight: 100;
  
`;

const TituloItem = styled.h3`
    text-align: center;
`;

const Linha = styled.hr`
    margin-bottom: 15px;
    border-top: 1px solid white;
    font-weight: 100;
`;

const LogoRN = styled.img`
    max-width: 70px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;


const Footer = () => {
    return(
        <FooterContainer>
            <ItemFooter>
               
                <TituloItem> SUBCOORDENADORIA DO ENSINO FUNDAMENTAL</TituloItem>
                <TextoItemCenter>CODESE - Coordenadoria do Desenvolvimento Escolar</TextoItemCenter>
                 </ItemFooter>
            <ItemFooter>
                <SubItemFooter>
                    <LogosFooter>
                        <MdLocationOn/>
                    </LogosFooter>
                    <TextoItemStart>
                        Centro Administrativo do Estado - Av. Senador Salgado Filho, s/n, Lagoa Nova - Natal/RN. CEP: 59064-901
                    </TextoItemStart>
                </SubItemFooter>
                <SubItemFooter>
                    <LogosFooter>
                        <MdMailOutline/>
                    </LogosFooter>
                    <TextoItemStart>
                        E-mail: algumacoisa@gmail.com
                    </TextoItemStart>
                </SubItemFooter>
                <SubItemFooter>
                    <LogosFooter>
                        <MdPhone/>
                    </LogosFooter>
                    <TextoItemStart>
                        Tel.: (84) 3232-0000
                    </TextoItemStart>
                </SubItemFooter>
            </ItemFooter>
            <ItemFooter>
                <TextoItemStart> <LogoRN src={UrlLogoRN}/></TextoItemStart>
                <TextoItemCenter>Secretaria de Estado da Educação, da Cultura, do Esporte e do Lazer - SEEC\RN</TextoItemCenter>
            </ItemFooter>
            
        </FooterContainer>
    );
  }
  
  
  export default Footer;