import styled from 'styled-components';
import MenuPrincipal from '../components/menu-principal';
import MenuDeAcessibilidade from '../components/menu-de-acessibilidade';
import UrlLogoRN from '../assets/svg/brasaoRN.svg';
import UrlLogoAcessoAInformacao from '../assets/acessoainformacao.png';

// Antiga cor do header background-color: #F0FFF0;

const ImagensContainer = styled.div`
    gap: 30px;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    padding: 20px 5% 20px 20px;
    border-bottom: 1px solid #ccd3d5;
`;

const AcessoAInformacaoContainer = styled.div`
    background-color: #ffd976;
    padding: 0px 5px 0px 5px;
    display: flex;
    flex-direction: row;
    font-style: italic;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    min-width: 110px;
    max-height: 40px;
`;

const TextoAcessoAInformacao = styled.p`
    color: green;
    font-weight: bold;
    font-style: italic;
    font-size: 10px;
    max-width: 70px;
`;

const LogoRN = styled.img`
    max-height : 70px;
`;

const LogoAcessoAInformacao = styled.img`
    max-height : 25px;
`;

const HeaderContainer = styled.header`
    background-color: white;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <MenuDeAcessibilidade/>
            <ImagensContainer>
                <AcessoAInformacaoContainer> 
                    <LogoAcessoAInformacao src={UrlLogoAcessoAInformacao}/>
                    <TextoAcessoAInformacao> 
                        ACESSO À INFORMAÇÃO.
                    </TextoAcessoAInformacao>
                </AcessoAInformacaoContainer>
                <LogoRN src={UrlLogoRN}/>
            </ImagensContainer>
            <MenuPrincipal/>
        </HeaderContainer>
    );
  }
  
  
  export default Header;