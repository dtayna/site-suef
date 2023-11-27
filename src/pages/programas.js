import styled from 'styled-components';
import { SuperTitle , Col, Text, Row} from '../components/global-components';
import EventCard from '../components/event-card';
import { Link } from 'react-router-dom';
import { MyContext } from '../utils/useContext.js';
import { useState, useContext } from 'react';


const Programas = () => {
  const context = useContext(MyContext);

  return(
        <Col padding="50px">
        <SuperTitle style={{ color: context.contrastebg == 'black' ? 'var(--mainColor1)' : 'white',}}> Conheça os Programas Desenvolvidos pela SUEF! </SuperTitle>
        <Row padding="50px 0px 0px 0px">
        <Link to={"/projetos?projeto=integral"} style={{textDecoration:  'none',}}> 
          <EventCard 
           imagem = "./imagensProgramas/integral1.jpeg"
          title="Educação Integral Em Tempo Integral Do Ensino Fundamental" 
          tipo="PROGRAMA"
          resume="A Educação Integral em Tempo Integral do Ensino Fundamental (doravante EITI) tem como compromisso a promoção da formação omnilateral..."/>
       </Link>
       <Link to={"/projetos?projeto=pse"} style={{textDecoration:  'none',}}> 
        <EventCard 
          imagem = "./imagensProgramas/pse1.jpeg"
          cor = "1"
          title="Programa Saúde na Escola - PSE" 
          tipo="PROGRAMA"
          resume="O Programa Saúde na Escola - PSE,  É uma política intersetorial da Saúde e da Educação, foi instituído em 2007..."/>
        </Link>
        </Row>
        <Row>
        <Link to={"/projetos?projeto=aprendervalor"} style={{textDecoration:  'none',}}> 
        <EventCard 
          imagem = "./imagensProgramas/ap1.jpeg"
          cor = "1"
          title="Aprender Valor" 
          tipo="PROGRAMA"
          resume="O Aprender Valor é um programa do Banco Central do Brasil que leva educação financeira aos estudantes de escolas públicas..."/>
        </Link>
        </Row>
        </Col>
  );
}
export default Programas;
