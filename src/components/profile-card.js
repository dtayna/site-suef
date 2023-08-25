import styled from 'styled-components';
import UrlProfileImage from '../assets/perfilexemplo.jpeg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 20px 20px;
    background-color: white;
    max-width: 150px;
    border-radius: 5px;
    box-shadow: 1px 2px 2px var(--grayShadow);
`;

const Image = styled.img`
    max-width: 100px;
    border-radius: 50%;
`;

const Name = styled.h4`
    color: var(--colorTitle);
`;

const Office = styled.h5`
    font-size: 0.8em;
    color: var(--colorSubtitle);
    margin-top: -20px;
`;

const Description = styled.p`
    margin-top: 0px;
    color: var(--colorText);
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 300;
`;

const  ProfileCard = (props) => {
    return( 
        <>
        <Container> 
            <Image src={UrlProfileImage}></Image>
            <Name>Teste Fulano</Name>
            <Office>Coordenador</Office>
            <Description> bdkfjdhskjndj usdfh kjsnbsb sdkjfndsjkh sdkjshsmndsbdd</Description>
        </Container>
        
        </>
          
    );
  }
  
  
export default ProfileCard;
