import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizBg from "./assets/QuizBg.svg";
import { useState } from "react";
import Results from "./pages/Results";

function App() {
  const [state] = useState(false);
  return (
    <div className="w-full h-full flex justify-center items-center">
      {state ? (<div className="w-full min-h-screen pb-4 bg-gradient-to-b from-white to-purple-400 flex flex-col items-center px-4">
        <Home />
      </div>)
      :
      (<div  className="bg-purple-400 w-full min-h-screen pb-4">
        <img className="fill-purple-200 bg-purple-400 w-full" src={QuizBg} />
        <Results />
      </div>)}
    </div>
  );
}

export default App;
