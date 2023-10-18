import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const[rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newRow = {
      itemName,
      quantity
    };

    setRows([...rows , newRow]);

    setItemName('');
    setQuantity('');
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <form onSubmit={handleSubmit}>
        <div className='input-bar'>
  <input
    className='item-name'
    type='text'
    name='itemName'
    value={itemName}
    onChange={(e) => setItemName(e.target.value)}
  />
</div>
<div className='quantity'>
  <input
    className='input-quantity'
    type='number'
    name='quantity'
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
  />
</div>
          <div className='submit'>
            <button type='submit'>Submit</button>
          </div>
        </form>
        {rows.map( (row , index) => (
          <div key={index} className='submitted-values'>
            <p>Item Name: {row.itemName}</p>
            <p>Quantity: {row.quantity}</p>
            <br></br>
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default App;