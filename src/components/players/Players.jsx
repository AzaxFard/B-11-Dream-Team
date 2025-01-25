import { useEffect, useState } from "react";
import Player from "../player/Player";
import PropTypes from "prop-types";
import SelectedPlayers from "../players/SelectedPlayers";


const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]); 
    const [showAvailable, setShowAvailable] = useState(true); 

    useEffect(() => {
        fetch("players.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);


    const handlePlayerSelection = (player) => {
        if (!selectedPlayers.some((p) => p.playerId === player.playerId)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const showAllPlayers = () => {
        setShowAvailable(true);
    };

    return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between items-center my-3">
                <h3 className="font-bold text-lg">{showAvailable ? 'Available Players' : 'Selected Players'}</h3>
                <div className="flex gap-2 text-xs">
                    <button className={`border rounded-xl p-2 ${showAvailable ? "bg-[#E7FE29]" : ""}`} onClick={() => setShowAvailable(true)}>Available</button>
                    <button className={`border rounded-xl p-2 ${!showAvailable ? "bg-[#E7FE29]" : ""}`} onClick={() => setShowAvailable(false)}>Selected</button>
                </div>
            </div>

            {showAvailable ? (
                <div className="ShowAll grid grid-cols-3 gap-3 mb-5">
                    {players.map((player) => (
                        <Player
                            key={player.playerId}
                            player={player}
                            handleSelectedPlayers={handlePlayerSelection}
                        ></Player>
                    ))}
                </div>
            ) : (
                <SelectedPlayers selectedPlayers={selectedPlayers} showAllPlayers={showAllPlayers} />
            )}
        </div>
    );
};

Players.propTypes = {
    handleSelectedPlayers: PropTypes.func,
};

export default Players;
