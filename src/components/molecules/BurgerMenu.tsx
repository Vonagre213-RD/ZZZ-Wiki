import BurgerMenuIcon from '@/assets/svgs/BurgerMenuIcon.tsx'
import Button from "@/components/atoms/Button"
import NavButton from '@/components/atoms/NavButton.tsx';
import FactionFilterSection from './FactionFilterSection';

import { useState } from 'react';

interface props {
    setNameFilter: React.Dispatch<React.SetStateAction<string>>
    setFactionFilter: React.Dispatch<React.SetStateAction<string>>
}
export default function BurguerMenu({ setNameFilter, setFactionFilter }: props) {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const routes = [
        {name:'home', path:"/"}, {name:'favorites', path:"Favorites"}]

    const handleBurgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='w-full flex flex-col lg:flex-row lg:justify-center lg:items-center'>
            <span className='w-full flex items-center'>
                <h1 className='text-white text-nowrap font-titles md:text-2xl' >Zenless Zone Zero Api</h1>
                <Button className='ml-auto lg:hidden' onClick={handleBurgerMenu}>
                    <BurgerMenuIcon size='50' color='white' />
                </Button>
            </span>

            <nav className={`flex flex-col w-full lg:items-center transition-all duration-700 gap-4 ${isOpen ? "max-h-160 mt-4" : "max-h-0 mt-0"} overflow-hidden
                lg:flex-row lg:max-h-10 lg:justify-end`}>
                {routes.map(b => (
                    <NavButton key={b.name} activeClass='bg-fosfo-600' className="h-8 w-full p-2 focus:outline-none bg-fosfo-500 font-titles flex items-center justify-center rounded-md
                    lg:w-40" to={`${b.path}`}>
                        {b.name}
                    </NavButton>
                ))}

                <input onChange={(e) => setNameFilter(e.target.value)} type="text" className='bg-white p-1 rounded-md focus:outline-none font-titles lg:w-[50%]' name='query' placeholder='Buscar personaje' />

                <span className='lg:hidden'>
                    <FactionFilterSection setFactionFilter={setFactionFilter} />
                </span>
            </nav>


        </div>

    )
}