import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';
import './App.css';
import { useState } from 'react';


function App() {
const [progress, setProgress] = useState(1)

const increment = (() => {  
  setProgress(progress + 1) 
})
const dicrement = (()=>{
  setProgress(progress - 1)
})

  return (
    <>
   
   {/* <input type='progress'/> */}
 
   <progress id="file" value={progress} max="100" min="0">  </progress>
    <span>{progress}%</span>
    <div>
    <button onClick={increment}>
        increment
        </button>
        <button onClick={dicrement}> dicrement</button>
    </div>
   
   
  
    </>
  );
}

export default App;
