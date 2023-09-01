import styled from 'styled-components';

export const GlobalStyles = styled.div`
    font-family: inherit;
    font-size: 1em;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    text-wrap: wrap;
`;

//Containers

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: ${props => props.justify ? props.justify : "space-around" };
    gap: ${props => props.gap ? props.gap : "0px"};
    padding: ${props => props.padding ? props.padding : "5px"};
    max-width: ${props => props.maxwidth ? props.maxwidth : "100%"};
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: ${props => props.justify ? props.justify : "space-around" };
    gap: ${props => props.gap ? props.gap : "0px"};
    padding: ${props => props.padding ? props.padding : "5px"};
    max-width: ${props => props.maxwidth ? props.maxwidth : "100%"};
`;

//Responsive Containers

export const BlockDesktop = styled.div`
    transparent;
    display: block;

    @media screen and (max-width: 930px) {
        display: none;
    }`
;

export const BlockTablet = styled.div`
    transparent;
    display: none;

    @media screen and (max-width: 930px) {
        display: block;
    }

    @media screen and (max-width: 734px) {
        display: none;
    }
`;

export const BlockSmartphone = styled.div`
    transparent;
    display: none;

    @media screen and (max-width: 734px) {
        display: block;
    }
`;

export const BlockTabletSmartphone = styled.div`
    transparent;
    display: none;

    @media screen and (max-width: 930px) {
        display: block;
    }
`;



export const ResponsiveCol = styled.div`
    
`;

export const ResponsiveRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: ${props => props.justify ? props.justify : "left" };
    gap: ${props => props.gap ? props.gap : "0px"};
    padding: ${props => props.padding ? props.padding : "5px"};
    max-width: ${props => props.maxwidth ? props.maxwidth : "100%"};

    @media screen and (max-width: 734px) {
        justify-content: center;
    }
`;

//Components

export const Text = styled.p`
    color: ${props => props.color ? props.color : 'var(--colorText)'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
`;

export const Link = styled.a`
    color: ${props => props.color ? props.color : 'var(--colorSubtitle)'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
    text-decoration: underline var(--colorSubtitle);
    font-size: 14px;
`;


export const Title = styled.h2`
    color: ${props => props.color ? props.color : 'var(--colorTitle)'};
    textAlign: center ;
`;

export const SuperTitle = styled.h1`
    color: ${props => props.color ? props.color : 'var(--colorTitle)'};
    textAlign: center ;
`;

export const Icon = styled.div`
    font-size: 1.5em;
    color: white;
`;

export const Line = styled.hr`
    width: ${props => props.linewidth ? props.linewidth : "90%"};
    margin-top: ${props => props.linemargintop ? props.linemargintop : "15px"};
    margin-bottom: 0;
    border-top: ${props => props.lineborder ? props.lineborder : "2px solid var(--mainColor2)"};
`;

export const IconClose = styled.div`
    background: transparent;
    width: 20px;
    color:  ${props => props.color ? props.color : 'var(--colorTitle)'};
    float: right;
`;

const  None = () => {
    return(<></>);
}

export default None();
