import styled from 'styled-components';

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
    min-width: 400px;
`;

const Footer = () => {
    return(
        <FooterContainer className="row">
            <ItemFooter className="col-10">testeooooooooooooooooooooooo1</ItemFooter>
            <ItemFooter className="col-10">test2</ItemFooter>
            <ItemFooter className="col-10">teste3</ItemFooter>
            
        </FooterContainer>
    );
  }
  
  
  export default Footer;