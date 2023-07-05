import { useState } from 'react'
import './App.css'

function App() {
  //const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [select, setSelectCur] = useState(0);
  const [selectConverted, setSelectConverted] = useState(0);
  //onst [amountConverted, setAmountConverted] = useState(0);

   //result of conversion
  let sumConversion = 0 ;
  

  const currencyArr = [
    {currency:'USD', balance:5000},
    {currency:'GBP', balance:2000},
    {currency:'EUR', balance:3500},
    {currency:'NGN', balance:3000000},

  ]
  //select source currency
 const handleSelect = (e) => {
  setSelectCur(e.target.value);
  console.log(select)
 }
  //select converted currency
 const handleSelectConverted = (e) => {
  setSelectConverted(e.target.value);
  console.log(select)
 }

  //input amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount)
  }

  //currency conversion
  
  const handleConvert = (e) => {
   return (
     e.preventDefault()
    //will use switch statement here
    if (select === "NGN" && selectConverted === "USD"){
      sumConversion = 0.5 * amount
    // }
    )
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
                <input type="text" className="form-amount" placeholder="amount" />
            </div>
            <button className="button">
              Convert
            </button>
          </form>
        </div>
        <div className="side-container">
                <h2>You are Converting: N{amount}.00</h2>
                <h2>You will get: N{sumConversion}.00</h2>
                <h2>SOurce: NGN Wallet</h2>
        </div>
      </div>
    </>
  )
}
}
export default App
