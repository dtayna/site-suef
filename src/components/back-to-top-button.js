import styled from 'styled-components';
import { Icon } from './global-components';
import React, { useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const Container = styled.div`
    position: fixed;
    font-size: 40px;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    color: var(--mainColor3);
    z-index: 300;
`;


const  BackToTopButton = () => {

    return( 
        <Container>
            <BsArrowUpCircle/>
        </Container>  
    );
  }
  
  
export default BackToTopButton;