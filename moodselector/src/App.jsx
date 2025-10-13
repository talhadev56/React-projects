import { useState } from 'react'
import './App.css'
import Mood from './components/Mood.jsx';
import  MoodSetter from './components/MoodSetter.jsx';


function App() {
  const [mood,setMood] = useState('happy');
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src="https://i1.sndcdn.com/avatars-000279116661-46raqd-t240x240.jpg" className="logo react img" alt="img"/>
        </a>
      </div>
      <Mood  setMood={setMood}/>
      <MoodSetter mood={mood}/>
    </>
  )
}

export default App