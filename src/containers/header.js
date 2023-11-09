import styled from 'styled-components';
import MainMenu from '../components/main-menu';
import AccessibilityMenu from '../components/accessibility-menu';
import UrlLogoRN from '../assets/svg/brasaoRN.svg';
import UrlLogoAcessoAInformacao from '../assets/acessoainformacao.png';
import BackToTopButton from '../components/back-to-top-button';
import { MyContext } from '../utils/useContext.js';
import React, { useContext } from 'react';

// Antiga cor do header background-color: #F0FFF0;

const ImagensContainer = styled.div`
    margin-top: 40px;
    gap: 30px;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 5% 20px 20px;
    border-bottom: 1px solid var(--colorBorder);
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

    @media screen and (max-width: 734px) {
        padding: 5px;
        min-width: 30px;
      }
`;

const TextoAcessoAInformacao = styled.p`
    color: green;
    font-weight: bold;
    font-style: italic;
    font-size: 10px;
    max-width: 70px;

    @media screen and (max-width: 734px) {
        display: none;
      }
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
    const context = useContext(MyContext);
    return(
        <HeaderContainer >
            <AccessibilityMenu/>
            <ImagensContainer style={{
            backgroundColor: context.contrastebg == 'black' ? 'white' : 'black',
                }}>
                <AcessoAInformacaoContainer> 
                    <LogoAcessoAInformacao src={UrlLogoAcessoAInformacao} alt="Acesso à Informação."/>
                    <TextoAcessoAInformacao> 
                        ACESSO À INFORMAÇÃO.
                    </TextoAcessoAInformacao>
                </AcessoAInformacaoContainer>
                <LogoRN src={UrlLogoRN}/>
            </ImagensContainer>
            <MainMenu/>
            <BackToTopButton/>
        </HeaderContainer>
        
    );
  }
  
  
  export default Header;