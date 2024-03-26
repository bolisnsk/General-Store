
import Main from './components/Main';
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px;
`

const MainTitle = styled.h1`
  font-size: 128px;
  color: black;
`;

function App() {
  return (
    <>
      <Wrapper>
          <MainTitle>
            귀여운게 최고다!!
          </MainTitle>  
      </Wrapper>
    </>
    
  );
}

export default App;
