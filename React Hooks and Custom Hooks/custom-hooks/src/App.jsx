import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [day, setDay] = useState('Monday');

  const prevDay = usePrevious(day);

  const getNextDay = ()=> {
    switch(day){
      case "Monday":
        setDay("Tuesday");
        break;

      case "Tuesday":
        setDay("Wednesday");
        break;
      
      case "Wednesday":
        setDay("Thursday");
        break;

      case "Thursday":
        setDay("Friday");
        break;

      case "Friday":
        setDay("Monday")
        break;
    }
  }

  return (
    <div>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay} </span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
    
  )
}

function usePrevious(val){
  const ref = useRef();
  useEffect(()=>{
    ref.current = val;
  }, [val]);
  return ref.current;
}
