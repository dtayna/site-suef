import React, { useState} from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './global-components';
import escolas from '../utils/escolas.json';

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 90%;
    border-radius: 5px;
    padding: 0px;
    box-shadow: var(--grayBoxShadow);
    margin-bottom: 30px;

    @media screen and (max-width: 734px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    }
    
`; 

const Cor = styled.div`
    padding: 30px;
    background-color: var(--mainColor1);
    width: 50%;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
    
    @media screen and (max-width: 734px) {
        width: 100%;
        padding: 0px;
        border-radius: 5px 5px 0px 0px;
    }
`;

const Selecao = styled.div`
    padding: 30px;
    background-color: white;
    width: 50%;
    height: 100%;
    border-radius: 5px 5px 5px 5px;

    @media screen and (max-width: 734px) {
        width: 100%;
        padding: 0px;
        border-radius: 0px 0px 5px 5px;
    }
   
`; 

const Select = styled.select`
    border-radius: 5px;
    background-color: var(--grayBoxShadow);
    color: var(--colorText);
    border: var(--lightBorder);
    font-size: 1em;
    padding: 5px;
    width: 100%;

    @media screen and (max-width: 734px) {
        width: 90%;
        margin:10px;
    }
    
`;

const  SelectEscolas = ({city}) => {
    const [jsonEscolas, setJsonEscolas] = useState(escolas.escolas[city]);
    let escolasList;

    if (jsonEscolas != undefined){
        escolasList = jsonEscolas.map(escola =>
            <option value={escola.id}>{escola.codigo} - {escola.nome}</option>
        );
    }else{
        escolasList = <></>;
    }

    return( 
        <>   
        <Container>
            <Cor>
                <Title color="white"> Painel Analítico de Indicadores </Title>
                <SubTitle>2023</SubTitle>
                <br></br>
            </Cor>
            <Selecao>
                <Title>Selecione uma escola:</Title>
                <form>
                    <Select name="cars" id="cars" form="carform">
                        <option value="null">-- Selecione uma Escola --</option>
                        {escolasList}
                    </Select>
                </form>
            </Selecao>
            
        </Container>
        
        </>
          
    );
  }
  
  
export default SelectEscolas;