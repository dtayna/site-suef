import styled from 'styled-components';
import '../styles/global.css';
import { useState } from 'react';
import { IconClose } from './global-components';
import { MdClose } from 'react-icons/md';

const Miniatura = styled.div`
    border-radius: ${props => props.radius !="" ? props.radius : '0px'};
    background:  ${props => props.url ? props.url : 'url(\"../imagemteste.jpg\")'};
    max-width: ${props => props.maxwidth !="" ? props.maxwidth : '300px'};
    display: block;
    margin: 10px;
    height:  ${props => props.height !="" ? props.height : '250px'};
    width:  ${props => props.width !="" ? props.width : '250px'};
    background-size: cover;
`;

const Divi = styled.div`
    z-index:3;
    position: relative;
    max-height: 80%;
    
`;

const Zoom = styled.img`
    z-index:3;
    max-height: 100%;
    max-width: 100%;
`;

const Popup = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: white;
    border-radius: 5px;
    height: 80%;
    width: 50%;
    max-width: 80%;
    max-height: 80%;
    padding: 2%;
    border: var(--lightBorder);
    
`;


//background:  ${props => props.url ? props.url : 'url(\"../imagemteste.jpg\")'};
//background-size: cover;

export const ImagemItem = (props) => {
    function activatePopup () {
        setActive(true); 
    };
    
    function desactivatePopup () {
        setActive(false);
    };

    const [active,setActive] = useState(false);

  return (
    <>
        <Miniatura height= {props.height} width={props.width} maxwidth={props.maxwidth} radius={props.radius} onClick={() => activatePopup(props.imagem)} url={'url(\"'+props.imagem+'\")'} >
        </Miniatura>
        <Popup show={active}>
            <IconClose onClick={() => desactivatePopup()}><MdClose/></IconClose>
            <br/>
                <Zoom src={props.imagem}/>
           
        </Popup>
    </>
  );
};



export default ImagemItem;