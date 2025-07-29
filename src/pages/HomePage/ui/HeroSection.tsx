import WaveDivider from "../../../shared/ui/WaveDivider"

const HeroSection = () => {
  return (
    <div className="flex relative flex-row justify-between">
      <div className="flex flex-col w-[50%] h-screen items-center justify-center">
        <h1 className="font-bold text-[80px]">Perfect pairings</h1>
        <p className="font-bold text-[70px] text-yellow-400">Powered by AI</p>
        <button className="rounded-4xl py-2 px-3 w-[180px] shadow-2xl">Try AI Pairing Now.</button>
      </div>

      <img src="/wine.jpg" className=" absolute right-0 top-0 w-[50%] h-screen"></img>
      <WaveDivider className="absolute bottom-0 text-gray-100" />
    </div>
  )
}

export default HeroSection