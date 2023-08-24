import styled from 'styled-components';
import Header from './containers/header';
import Footer from './containers/footer';
import MyRoutes from './utils/routes';
import { GlobalStyles } from './components/global-components';

const Paginas = styled.main`
  background-color: #f6f6f6;
  padding-top: 0px;
  padding-bottom: 40px;
  margin-top: 0px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Header/>
        <Paginas>
        <MyRoutes/>
        </Paginas>
        <Footer/>
      </GlobalStyles>
    </div>
  );
}

export default App;
