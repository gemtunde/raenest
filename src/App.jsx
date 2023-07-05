import { useState } from 'react'
import './App.css'

function App() {
  //const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [select, setSelectCur] = useState("");
  const [selectConverted, setSelectConverted] = useState("");

  //result of conversion
  const [amountConverted, setAmountConverted] = useState(0);

  

  const currencyArr = [
    {currency:'USD', balance:5000},
    {currency:'GBP', balance:2000},
    {currency:'EUR', balance:3500},
    {currency:'NGN', balance:3000000},

  ]
  //select source currency
 const handleSelect = (e) => {
  setSelectCur(e.target.value);
  console.log(e.target.value)
 }
  //select converted currency
 const handleSelectConverted = (e) => {
  setSelectConverted(e.target.value);
  console.log(e.target.value)
 }

  //input amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount)
  }

  //currency conversion
   function handleConvert(e){
    e.preventDefault();
    //use switch statement here
    if(select === "NGN" && selectConverted === "USD"){
      //used dummy data as exchange rate
      setAmountConverted(amount * 0.005) ; 
    }
    else if(select === "NGN" && selectConverted === "GBP"){
      //used dummy data as exchange rate
      setAmountConverted(amount * 0.09) ; 
    }
    else if(select === "NGN" && selectConverted === "EUR"){
      //used dummy data as exchange rate
      setAmountConverted(amount * 0.19) ; 
    }
   }

  return (
    <>
     <h2>Convert from one currency to another</h2>
      <div className="main">
       
        <div className="main-container">
          <form className="form" onSubmit={handleConvert}>
            {/* source from */}
            <div className="form-select">
            <select value={select} onChange={handleSelect}>
              {
                currencyArr && currencyArr.map((item, index) => 
                <option 
                value={item.currency}
                key={index}>
                {item.currency}</option>
                )
              }
                
               
            </select>
              <div className="balance">
                <h2>Balance</h2>
                {/* <p>{balance.balance}</p> */}
              </div>
            </div>
            <div className="form-input">
                <input 
                onChange={handleAmount}
                type="text"
                 className="form-amount" 
                 placeholder="amount" />
            </div>

            {/* converted to  */}
            <div className="form-select">
            <select value={selectConverted} onChange={handleSelectConverted}>
              {
                currencyArr && currencyArr.map((item, index) => 
                <option 
                value={item.currency}
                key={index}>
                {item.currency}</option>
                )
              }
                
               
            </select>
              <div className="balance">
                <h2>Balance</h2>
                <p>$45.00</p>
              </div>
            </div>
            <div className="form-input">
                <input type="text" className="form-amount" placeholder="amount" value={amountConverted}/>
            </div>
            <button className="button">
              Convert
            </button>
          </form>
        </div>
        <div className="side-container">
                <h2>You are Converting: N{amount}.00</h2>
                <h2>You will get: N{amountConverted}.00</h2>
                <h2>SOurce: NGN Wallet</h2>
        </div>
      </div>
    </>
  )
}
export default App
