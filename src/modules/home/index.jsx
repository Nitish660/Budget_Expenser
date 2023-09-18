import React, { useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent"

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;


const HomeComponent = (props) => {
    const[transactions,updateTransaction] = useState([]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    };

    return (
        <Container>
            
            <OverViewComponent addTransaction={addTransaction}/>
            <TransactionsComponent transactions={transactions}/>
        </Container>

    );

};

export default HomeComponent;