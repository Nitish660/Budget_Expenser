import React from 'react';
import styled from 'styled-components';
import HomeComponent from './modules/home/index'


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
      <Header>Expensetracker</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;


