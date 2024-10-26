import './App.css'
import Navbar from './components/navbar/navbar'
import Players from './components/players/players'
import Banner from './components/sections/banner'
import Footer from './components/sections/footer'
import SelectedPlayers from './components/players/SelectedPlayers';
import { useState } from 'react';


function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [Balance, setBalance] = useState(0)

  const handleSelectedPlayers = Player => {
    if(Balance > Player.biddingPrice){
      if(selectedPlayers.length < 6){
      const remainingBalance = Balance-Player.biddingPrice;
      setBalance(remainingBalance)
      const newSelectedPlayers = [...selectedPlayers, Player]
      setSelectedPlayers(newSelectedPlayers)}
    else{
      alert('Reached maximum amount')
    }}
    else {
      alert('Not enough balance')
    }
  }

  const handleClaimCredit = credit =>{
    const newBalance = Balance + credit;
    setBalance(newBalance);
  }

  return (
    <>
        <Navbar Balance={Balance}></Navbar>
        <Banner handleClaimCredit={handleClaimCredit}></Banner>
        <div className=''>
          <Players handleSelectedPlayers={handleSelectedPlayers}></Players>
        </div>
        <div className=''>
          <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
        </div>
        <Footer></Footer>
    </>
  )
}

export default App
       