import './App.css'

import { useEffect, useState } from 'react'
import Header from '@/components/templates/Header'
import CharactersSection from '@/components/molecules/CharactersSection'
import FactionFilterSection from "@/components/molecules/FactionFilterSection"
import FavoritesSection from './components/molecules/FavoritesSection'
import MoreInfoSection from '@/components/molecules/MoreInfoSection'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [nameFilter, setNameFilter] = useState<string>("")
  const [factionFilter, setFactionFilter] = useState<string>("")

  useEffect(() => {
    console.log(factionFilter)
  }, [factionFilter])
  return (
    <div className='bg-diagonal-lines h-auto '>
      <Header setFactionFilter={setFactionFilter} setNameFilter={setNameFilter} />
      <span className=' justify-center hidden lg:flex'>
        <FactionFilterSection setFactionFilter={setFactionFilter} />
      </span>

      <Routes>
        <Route path='/' element={<CharactersSection factionFilter={factionFilter} nameFilter={nameFilter} />} />
        <Route path='/Favorites' element={<FavoritesSection factionFilter={factionFilter} nameFilter={nameFilter} />} />
        <Route path='/Mas/:id' element={<MoreInfoSection/>} />
      </Routes>
    </div>
  )
}

export default App
