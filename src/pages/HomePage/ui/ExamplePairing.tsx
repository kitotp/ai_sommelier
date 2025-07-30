import { PairingCard } from "../../../entities/pairing/ui/PairingCard";

const ExamplePairing = () => {
    return (
        <div className='min-h-[500px] flex items-center flex-col bg-[#fcfbbd]'>
            <h1 className="text-[36px] font-bold mt-10">Pairing examples</h1>
            <div className="flex flex-col items-center justify-center">
                <PairingCard colorStyle="red" foodImage="/salmon.jpg" wine="Pinot Noir" match={95} description="A light to medium-boiled red wine with earthy undertones and bright acidity that complements the richness of salmon without overpowering its delicate flavor." confidence="expert" />
                <PairingCard colorStyle="emerald" foodImage="/wagyu.jpg" wine="Cabernet Sauvignon" match={92} description="A full‑bodied Cabernet Sauvignon with dark‑fruit notes, firm tannins and a hint of oak cuts through the intense marbling of Wagyu beef and amplifies its umami richness." confidence="expert" />
                <PairingCard colorStyle="amber" foodImage="/ramen.jpg" wine="Junmai Ginjo Sake" match={90} description="A chilled Junmai Ginjo sake with subtle melon and rice notes refreshes the palate, balances the umami‑rich pork broth, and highlights the delicate noodles and toppings in traditional ramen." confidence="high" />
            </div>
        </div>
    )
}

export default ExamplePairing