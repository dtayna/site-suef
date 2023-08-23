import styled from 'styled-components';
import UrlProfileImage from '../assets/perfilexemplo.jpeg'

const QuadroProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 20px 20px;
    background-color: white;
    max-width: 150px;
    border-radius: 5px;
    box-shadow: 1px 2px 2px #e1e1e1;
`;

const ImageProfile = styled.img`
    max-width: 100px;
    border-radius: 50%;
`;

const NomeProfile = styled.h4`
    color: #4F4F4F;
`;

const Funcao = styled.h5`
    font-size: 0.8em;
    color: #A9A9A9;
    margin-top: -20px;
`;

const Description = styled.p`
    margin-top: 0px;
    color: #3d4147;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 300;
`;

const  ProfileFrame = (props) => {
    return( 
        <>
        <QuadroProfile> 
            <ImageProfile src={UrlProfileImage}></ImageProfile>
            <NomeProfile>Teste Fulano</NomeProfile>
            <Funcao>Coordenador</Funcao>
            <Description> bdkfjdhskjndj usdfh kjsnbsb sdkjfndsjkh sdkjshsmndsbdd</Description>
        </QuadroProfile>
        
        </>
          
    );
  }
  
  
export default ProfileFrame;
