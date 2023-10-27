import {logo} from '../assets'
import { AiOutlineLink } from "react-icons/ai";


const Hero = () => {
  return (
    //  NAVBAR
    <header className=' w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-6'>
        
        <div className=' flex flex-row justify-center items-center'>
          <img src={logo} alt="Briefly logo" width={30}/>
          <h2 className=' font-satoshi text-2xl font-bold '>BRIEFLY</h2>
        </div>

        <button type='button' onClick={() => window.open('https://github.com/')} className='black_btn flex items-center relative'>
          <AiOutlineLink />
          GitHub
        </button>         
      </nav>

      {/* HEADING */}

      <h1 className='head_text'>
        Swiftly Summarize Articles with the power of<br/>
        <span className='blue_gradient'>OpenAI!</span>
      </h1>
      <h2 className='desc'>
        Briefly, your AI-powered summarizer, takes the hassle out of reading lengthy articles. It swiftly distills complex content into concise and easily digestible summaries, saving you time and effort while ensuring you never miss the key insights.
      </h2>
    </header>
  )
}

export default Hero

