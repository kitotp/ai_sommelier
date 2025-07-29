type WaveDividerProps = {
    className: string;
}


const WaveDivider = ({ className = '' }: WaveDividerProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`block w-full  ${className}`}>
            <path fill="rgba(245, 245, 245)" fill-opacity="1" d="M0,192L40,176C80,160,160,128,240,122.7C320,117,400,139,480,154.7C560,171,640,181,720,170.7C800,160,880,128,960,128C1040,128,1120,160,1200,160C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
    )
}

export default WaveDivider