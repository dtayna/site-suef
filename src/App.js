import styled from 'styled-components';
import Header from './containers/header';
import Footer from './containers/footer';
import MyRoutes from './utils/routes';
import { GlobalStyles } from './components/global-components';
import { MyContext } from './utils/useContext.js';
import { useContext } from 'react';

const Paginas = styled.main`
  background-color: var(--background-color);
  padding-top: 0px;
  padding-bottom: 40px;
  margin-top: 0px;
`;

function App() {
  const context = useContext(MyContext);
  return (
    <div className="App">
      
      <GlobalStyles>
         <Paginas style={{
            backgroundColor: context.contrastebg == 'black' ? '#f6f6f6' : 'black',
                }}>
            <Header/>
           <MyRoutes/>
        </Paginas>
        <Footer/>
      </GlobalStyles>
      
    </div>
  );
}

export default App;
