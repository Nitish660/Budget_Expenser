import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
 `;



const App = () => {
  return (
    <Container>App
      <header>
    Expense tracker
      </header>
    </Container>
  );
};

export default App;
