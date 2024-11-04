import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { useQuiz } from '../context';

export default function Home() {
  const { startQuiz } = useQuiz();

  const navigate = useNavigate();
  const handleStart =async () => {
    const result = await startQuiz();
    if(result == 'success') {
      navigate("/quiz");
    }
    
  }
    return (
      <div className='flex flex-col items-center justify-center'>
        <div className="pt-8 pb-16">
          <div className="flex items-center gap-2">
            <img src={Logo} />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md gap-8">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-red-500 relative">
              Quiz
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
            </span>
          </div>
          
          <button 
            className="w-full max-w-xs bg-red-500 hover:bg-red-600 text-white rounded-full py-6 text-xl"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>
    )
  }