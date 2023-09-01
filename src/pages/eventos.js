import styled from 'styled-components';
import { SuperTitle, Row, Col } from '../components/global-components';
import SideMenu from '../components/side-menu';
import EventsPosts from '../containers/events-posts';

const Eventos = () => {
  return(
    <>
      {/*<SideMenu/>*/}
        <EventsPosts/>
    </>
  );
}
export default Eventos;