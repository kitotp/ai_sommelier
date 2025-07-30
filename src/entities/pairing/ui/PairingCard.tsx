import { Star, Wine } from 'lucide-react'
import Card from '../../../shared/ui/Card'

const cardStyles = 'w-[430px] h-[290px] flex flex-col bg-white shadow-2xl rounded-r-4xl px-6 py-5'

const COLOR_MAP = {
    emerald: {
        bgSoft: 'bg-emerald-100',
        textAccent: 'text-emerald-500',
        badgeBg: 'bg-emerald-100',
        badgeText: 'text-emerald-700',
    },
    red: {
        bgSoft: 'bg-red-100',
        textAccent: 'text-red-500',
        badgeBg: 'bg-red-100',
        badgeText: 'text-red-700',
    },
    amber: {
        bgSoft: 'bg-amber-100',
        textAccent: 'text-amber-500',
        badgeBg: 'bg-amber-100',
        badgeText: 'text-amber-700',
    },
} as const;

export interface PairingProps {
    foodImage: string;
    wine: string;
    match: number;
    description: string;
    confidence: 'expert' | 'high' | 'medium',
    colorStyle?: 'emerald' | 'red' | 'amber'
}

export const PairingCard = ({ foodImage, wine, match, description, confidence, colorStyle = 'emerald' }: PairingProps) => {

    const colors = COLOR_MAP[colorStyle]

    return (
        <div className="flex flex-row mt-2 items-center">
            <img src={foodImage} className="w-[430px] h-[290px] rounded-l-4xl"></img>

            {/* Card */}
            <Card classname={cardStyles}>
                <div className="flex flex-row gap-3 items-center">
                    <div className={`rounded-full w-[43px] h-[43px] flex items-center justify-center ${colors.bgSoft}`}>
                        <Wine size={24} className={colors.textAccent} />
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="font-semibold text-[20px]">Recommended: {wine}</h1>
                    </div>
                </div>
                <p className={`${colors.bgSoft} w-fit font-medium inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${colors.badgeText}`}>{match}% Match</p>


                <p className="mt-7 leading-relaxed text-gray-700">{description}</p>
                <div className="flex flex-row mt-auto items-center gap-1 text-amber-600">
                    <Star size={15} className="fill-current" />
                    {confidence === 'expert' ? <p>Expert-level pairing confidence</p> : 'High confidence'}

                </div>
            </Card>
        </div>
    )
}