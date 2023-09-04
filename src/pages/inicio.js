import styled from 'styled-components';
import QuadrosInstitucionais from '../containers/quadros-institucionais'
import Carousel from '../components/carousel'

const Inicio = () => {
  return(
        <div>   
          <Carousel/>
          <br></br>
          <QuadrosInstitucionais/> 
        </div>
  );
}
export default Inicio;
