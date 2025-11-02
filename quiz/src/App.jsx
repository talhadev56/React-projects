import React, { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const cards = [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which HTML tag is used to insert an image?",
      options: ["<img>", "<image>", "<src>", "<pic>"],
      correctAnswer: 0,
    },
    {
      question: "Which property is used in CSS to change text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      correctAnswer: 2,
    },
    {
      question: "Which language adds interactivity to websites?",
      options: ["PHP", "Java", "Python", "JavaScript"],
      correctAnswer: 3,
    },
    {
      question: "What's the default HTTP method used by forms?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Laravel", "Django", "React", "Flask"],
      correctAnswer: 2,
    },
    {
      question: "In React, what is used to manage component data?",
      options: ["Props", "useEffect", "State", "Refs"],
      correctAnswer: 2,
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: 2,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: 3,
    },
    {
      question: "Which language is known for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correctAnswer: 1,
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
    },
  ];

  return (
    <>
      <nav className="text-light">
        <div className="d-flex">
          <h2 className="m-1 font-monospace ms-5">FLASHCARD</h2>
          <ul className="nav justify-content-center w-75 p-2 gap-5 fs-3 ">
            <li className="nav-item ">Home </li>
            <li className="nav-item ">About </li>
            <li className="nav-item ">Services </li>
          </ul>
        </div>
      </nav>
      <section className="text-center mt-4 p-1  container rounded-5 w-25">
       
          <marquee className='fs-5'>Simple FlashCard Application 🧠 || IQ tester</marquee>
        
      </section>

      <section>
        <div className="text-white w-50 rounded-5 text-center card">
          <div className="p-3">
            <h5>
              Card {index + 1} of {cards.length}
            </h5>
            <h3>{cards[index].question}</h3>
            <div className="w-50 btn text-dark bg-light">
              {cards[index].options.map((option, index) => (
                <div key={index} className="btns rounded-5 p-3">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
  className="btn btn-light px-3 butn"
  onClick={() => setIndex(index - 1)}
  disabled={index === 0} >
  previous
</button>
<button
  className="btn btn-light px-4 butn"
  onClick={() => setIndex(index + 1)}
  disabled={index === cards.length - 1} >
  next
</button>
      </section>
      <footer className="p-2 mt-5 text-light text-center fs-5">
        <p>Copyright 2025 || All Rights Reserved</p>
      </footer>
    </>
  );
};

export default App;
