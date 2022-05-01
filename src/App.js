import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [advice, setAdvice] = useState(null)
  
  useEffect(() => {
    query()
    

  },[])
  
    const query = async () =>{
    const respuesta = await fetch('https://api.adviceslip.com/advice');
    const data = await respuesta.json()
    setAdvice(data.slip)
  }

  

  
  return (
    <main>
      {advice !== null 
      ?  <Card  onClick={query} content={advice}/>
      : ""}
     
    </main>
  );
}

export default App;
