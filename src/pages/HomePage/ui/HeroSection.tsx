import WaveDivider from "../../../shared/ui/WaveDivider"
import { FaArrowRight } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div className="flex relative flex-row justify-between bg-[#fcfbbd]">
      <div className="flex flex-col w-[50%] h-screen items-center justify-center">
        <h1 className="font-bold text-[80px]">Perfect pairings</h1>
        <p className="font-bold text-[70px] text-yellow-400">Powered by AI</p>
        <button className="rounded-4xl mt-2 font-medium py-2 px-3 w-[200px] flex flex-row gap-1 justify-center items-center bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 shadow-md shadow-orange-200/60">
          Try AI Pairings Now
          <FaArrowRight size={14} />
        </button>
      </div>

      <img src="/wine.jpg" className=" absolute right-0 top-0 w-[50%] h-screen"></img>
      <WaveDivider className="absolute bottom-0 text-gray-100" />
    </div>
  )
}

export default HeroSection