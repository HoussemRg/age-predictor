import React,{useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [info,setInfo]=useState(null);
  const [name,setName]=useState("");
  const predictAge=()=>{
      Axios.get(`https://api.agify.io?name=${name}`).then((res)=>{
          setInfo(res.data);
      });
  }
  
  const putName=(event)=>{
    setName(event.target.value);
  }
 


  return (
    <div className="App">
      <h1> Age Predictor</h1>
      <input type="text" placeholder="Enter Your Name" onChange={putName}></input>
      <button onClick={predictAge}>Predict</button>
      <h1>Name :{info?.name}</h1>
      <h1>Your Age Is :{info?.age}</h1>
    </div>
  );
}

export default App;
