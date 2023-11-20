import logo from './logo.svg';
import './App.css';
import My from './My';
import { useState } from 'react';

function App() {
  let [value1,setValue1] = useState({name:"Phone",description:"Iphone 15",price:3000})
  let [value2,setValue2] = useState({name:"Phone",description:"Samsung Note 10",price:2000})
  let [value3,setValue3] = useState({name:"Phone",description:"Xiaomi 11 lite",price:6000})
  let [value4,setValue4] = useState({name:"Phone",description:"Google Pixel 6 pro ",price:2200})
  let [value5,setValue5] = useState({name:"Phone",description:"Infinix 30i ",price:300})
  return (
    <div className="App">
      
      <My
        {...value1}
      />
        <My
        {...value2}
      />
        <My
        {...value3}
      />
        <My
        {...value4}
      />
        <My
        {...value5}
      />
      
      
    </div>
  );
}

export default App;
