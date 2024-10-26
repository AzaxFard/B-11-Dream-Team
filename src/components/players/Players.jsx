import { useEffect } from "react";
import { useState } from "react";
import Player from "../player/Player";
import PropTypes from 'prop-types';

const Players = ({handleSelectedPlayers}) => {
    const [players, setPlayers] = useState([])

    useEffect( () =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between items-center my-3">
                <h3 className="font-bold text-lg">Available Players</h3>
                <div className="flex gap-2 text-xs">
                    <button className="border rounded-xl p-2 bg-[#E7FE29]">Available</button>
                    <button className="border rounded-xl p-2">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
            {
                players.map(player => <Player key={player.playerId} player={player}
                handleSelectedPlayers={handleSelectedPlayers}></Player>)
            }
            </div>
        </div>
    );
};

Players.propTypes = {
    handleSelectedPlayers: PropTypes.func
}

export default Players;