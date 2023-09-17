import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30x 0 10px;
  font-family: Montserrat;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

const App = () => {
  return (
    <Container>
      <Header>Expense tracker</Header>
    </Container>
  );
};

export default App;
