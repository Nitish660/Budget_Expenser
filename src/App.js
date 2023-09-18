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

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
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


