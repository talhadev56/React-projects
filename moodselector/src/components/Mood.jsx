import React from 'react'

const Mood = ({setMood}) => {
    let mood = [
        {
            icons : "😂",
            lable : "Happy",
        },
        {
            icons : "😔",
            lable : "Sad",
        },
        {
            icons : "😮",
            lable : "Shock",
        },
        {
            icons : "😍",
            lable : "Amazing",
        },
        {
            icons : "😴",
            lable : "Tired",
        },
        {
            icons : "🤕",
            lable : "ill",
        },
    ];
    let onMoodChange = (item) =>{
        // console.log(item);
        setMood(item.lable);
        
    }
  return (
    <div>
        <div className="card">
        <h2>Select Mood</h2>
        <div>
            {
            mood.map((element, index) => (
            <button key={index} onClick={() => onMoodChange(element)} className='btn'> {element.icons} {element.lable} </button>
            ))
          }
            
        </div>
      </div>
    </div>
  )
}

export default Mood