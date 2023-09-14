import styled from 'styled-components';
import DataDirec from '../components/data-direc';
import { Row, Col, SuperTitle } from '../components/global-components';

const InfoDirecs= () => {
  return(
    <Row>
        <Col>
        <DataDirec direc={"1ª DIREC - Natal"} 
            diretor={"Jarbas Brito de Araújo - Diretor"}
            local={"Centro Administrativo do Governo do Estado - Bl. I - Térreo - Lagoa Nova CEP: 59064-901 - Natal/RN"}
            email={"E-mail: 1dired@rn.gov.br"}
            telefones={"Telefones: 3232-7448 / 7649 / 2745 / 4248 / 7455 / 7648 / 7450 (FAX)"}
            />
        </Col>
        <Col>
        <DataDirec direc={"2ª DIREC - Parnamirim"} 
            diretor={"Jarbas Brito de Araújo - Diretor"}
            local={"Centro Administrativo do Governo do Estado - Bl. I - Térreo - Lagoa Nova CEP: 59064-901 - Natal/RN"}
            email={"E-mail: 1dired@rn.gov.br"}
            telefones={"Telefones: 3232-7448 / 7649 / 2745 / 4248 / 7455 / 7648 / 7450 (FAX)"}
            />
        </Col>
    </Row>
  );
}

export default InfoDirecs;