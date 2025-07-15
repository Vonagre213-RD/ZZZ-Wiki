import BurgerMenu from "@/components/molecules/BurgerMenu"

interface props {
    setNameFilter: React.Dispatch<React.SetStateAction<string>>
    setFactionFilter: React.Dispatch<React.SetStateAction<string>>
}
export default function Header({ setNameFilter, setFactionFilter }: props) {


    return (
        <header className="flex-col bg-neutral-800 w-full min-h-20 p-4 flex items-center sticky top-0 z-10">

            <BurgerMenu setNameFilter={setNameFilter} setFactionFilter={setFactionFilter} />

        </header>
    )
}