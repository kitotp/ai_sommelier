import Card from "../../../shared/ui/Card"

import { Camera, Brain, Wine } from 'lucide-react';

const steps = [
    {
        icon: <Camera size={36} className="text-amber-700" />,
        title: 'Upload Your Meal',
        text: 'Take a photo of your dish or upload an existing image from your device',
    },
    {
        icon: <Brain size={36} className="text-orange-500" />,
        title: 'AI Analysis',
        text: 'Our AI identifies ingredients, flavors and cooking methods to understand your meal',
    },
    {
        icon: <Wine size={36} className="text-emerald-600" />,
        title: 'Perfect Pairing',
        text: 'Receive tailored beverage recommendations with detailed explanations',
    },
];

const cardStyles = 'flex flex-col min-h-[260px] bg-white border-b-[4px] border-b-orange-200  items-center justify-start py-8 px-6 w-72 text-center shadow-2xl rounded-2xl'


const HowItWorks = () => {
    return (
        <div className="flex flex-col items-center bg-[#f5f5f5]">
            <h1 className="text-[36px] font-semibold mt-4">How it works</h1>
            <p className="text-gray-600 font-medium mt-2">Our advanced AI analyzes your food images to provide personalized beverage recommendations</p>
            <div className="flex flex-row gap-3 mt-[60px] mb-[200px]">
                {steps.map(({ icon, title, text }) => (
                    <Card classname={cardStyles}>
                        <div className="rounded-full w-[50px] h-[50px] items-center justify-center flex bg-orange-300">
                            {icon}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-[14px]">{text}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default HowItWorks