import './App.css'
import Navbar from './components/navbar/navbar'
import Players from './components/players/players'
import Banner from './components/sections/banner'
import Footer from './components/sections/footer'
import SelectedPlayers from './components/players/SelectedPlayers';
import { useState } from 'react';
import Player from './components/player/Player'


function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const handleSelectedPlayers = Player => {
    const newSelectedPlayers = [...selectedPlayers, Player]
    setSelectedPlayers(newSelectedPlayers)
  }

  return (
    <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Players handleSelectedPlayers={handleSelectedPlayers}></Players>
        <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
        <Footer></Footer>
    </>
  )
}

export default App
       