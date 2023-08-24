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
    color: ${props => props.color ? props.color : 'var(--grayText)'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
`;

export const Icon = styled.div`
    font-size: 1.5em;
    color: white;
`;

const  None = () => {
    return(<></>);
}

export default None();
