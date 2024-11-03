import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizBg from "./assets/QuizBg.svg";
import { useState } from "react";

function App() {
  const [state] = useState(false);
  return (
    <div>
      {state ? (<div className="min-h-screen bg-gradient-to-b from-white to-purple-400 flex flex-col items-center px-4">
        <Home />
      </div>)
      :
      (<div  className="bg-purple-400">
        <img className="fill-purple-200 bg-purple-400 w-full" src={QuizBg} />
        <Quiz />
      </div>)}
    </div>
  );
}

export default App;
