import styled from 'styled-components';
import React, { useState , useContext } from 'react';
import { MdOutlineTextDecrease, MdOutlineTextIncrease, MdContrast, MdAccessibility } from 'react-icons/md';
import { RiInstagramLine , RiYoutubeFill } from 'react-icons/ri';
import { Icon } from './global-components';
import { MyContext } from '../utils/useContext.js';

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
  
const Fix = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 289;
`;


const AccessibilityMenu = () => {

  const context = useContext(MyContext);
  const root = document.documentElement;

  function aumentaLetra() {
    if (context.tamanho<4){
    context.setTamanho(context.tamanho*1.5);
    root.style.setProperty('--font-size', context.tamanho+"em");
    localStorage.setItem('fontSize', context.tamanho+"em");
    }
  };

  function diminuiLetra() {
    if (context.tamanho>0.1){
      context.setTamanho(context.tamanho*0.5);
      root.style.setProperty('--font-size', context.tamanho+"em");
      localStorage.setItem('fontSize', context.tamanho+"em");
    }
  };

  function mudaContraste(){
    localStorage.setItem('bgColor', context.contrastebg);
    root.style.setProperty('--background-color', context.contrastebg);
    root.style.setProperty('--color', context.contrastetext);
    if(context.contrastebg == 'black'){
      context.setContrastebg('#f6f6f6');
      context.setContrastetext('#3d4147');
    }else{
      context.setContrastebg('black');
      context.setContrastetext('white');
    }
    
    
    console.log(context.contrastebg);
}


    return(
      <Fix>
      <Container>
        <Item onClick={() => mudaContraste()}>
          <Icon>
            <MdContrast/>
          </Icon>
        </Item>
        <Item onClick={() => diminuiLetra()}>
          <Icon>
            <MdOutlineTextDecrease/>
          </Icon>
        </Item>
        <Item onClick={() => aumentaLetra()}>
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
      </Fix>
    );
  }

export default AccessibilityMenu;