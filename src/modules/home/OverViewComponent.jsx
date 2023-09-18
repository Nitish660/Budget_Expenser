import React, { useState } from "react";
import styled from "styled-components";

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

const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

const AddTransaction = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
  text-align: center; /* Apply text-align to center text within the div */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;


const AddTransactionContainer = styled.div`
  font-size: 15px;
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;
  & input {
    width: 90%;
    outline: none;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    margin: 5px;
    padding: 5px;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input{
    width: unset;
    margin: 0 10px;
  }
`;

const AddTransationView = (props) => {
    const[amount,setAmount] = useState();
    const[desc,setDesc] = useState();
    const[type,setType] = useState("EXPENSE")

    const addTransaction =(props) =>{
      props.addTransaction({
        id:Date.now(),
        amount: Number(amount),
        desc,type
      })
      console.log({amount,desc,type});
      props.toggleAddTxn();
    }

  return <AddTransactionContainer>
    <input
    placeholder="Amount"
    type="number"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    />
    <input
     placeholder="Description"
     type="text"
     value={desc}
     onChange={(e) => setDesc(e.target.value)}
    />

    <RadioBox>
      <input
      type="radio"
      id="expense"
      name="type"
      value="EXPENSE"
      checked={type === "EXPENSE"}
      onChange={(e) => setType(e.target.value)}
      />

      <label htmlFor="expense">Expense</label>
       <input
     type="radio"
     id="income"
     name="type"
     value="INCOME"
     checked={type === "INCOME"}
     onChange={(e) => setType(e.target.value)}
      />
       <label htmlFor="income">Income</label>
    </RadioBox>
    <AddTransaction onClick={addTransaction}
    >Add Transaction</AddTransaction>

    
  </AddTransactionContainer>;
};

const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: $5000
        <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}
        >{isAddTxnVisible ? "Cancel" : "Add"}</AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (<AddTransationView toggleAddTxn={toggleAddTxn} 
      addTransaction={props.addTransaction}
      />
    )}
    </Container>
  )
};

export default OverViewComponent;
