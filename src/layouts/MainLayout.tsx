import { Outlet } from "react-router-dom";
import QuizBg from "../assets/QuizBg.svg";

function MainLayout() {
  console.log("MainLayout");
  return (
    <div className="bg-purple-400 w-full min-h-screen pb-4">
      <img
        className="fill-purple-200 bg-purple-400 w-full max-h-32"
        src={QuizBg}
      />
      <Outlet />
    </div>
  );
}

export default MainLayout;
