import PropTypes from 'prop-types'
import SelectedPlayer from '../player/SelectedPlayer';
// import SelectedPlayer from "../player/SelectedPlayer";

const SelectedPlayers = ({selectedPlayers}) => {
    return (
        <div className="w-10/12 mx-auto mb-52">
            <div className="flex justify-between items-center my-3">
                <h3 className="font-bold text-lg">Selected Players: {selectedPlayers.length}</h3>
                <div className="flex gap-2 text-xs">
                    <button className="border rounded-xl p-2">Available</button>
                    <button className="border rounded-xl p-2">Selected</button>
                </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} SelectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
            </div>
            
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array
}

export default SelectedPlayers;