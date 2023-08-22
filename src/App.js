import styled from 'styled-components';
import Header from './containers/header';
import Footer from './components/footer';
import MyRoutes from "./utils/routes";

const Paginas = styled.main`
  background-color: #f6f6f6;
  padding-top: 0px;
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Paginas>
      <MyRoutes/>
      </Paginas>
      <Footer/>
    </div>
  );
}

export default App;
