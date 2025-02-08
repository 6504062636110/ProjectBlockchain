import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 className="fonthead">TIGGER-B</h1>
        <input 
          type="text" 
          placeholder="กรอกข้อความที่นี่..." 
          className="input-box"
        />
        <button className="btn" onClick={() => alert("คุณกดปุ่ม!")}>
          กดที่นี่
        </button>
      </div>
    </>
  );
}

export default App

