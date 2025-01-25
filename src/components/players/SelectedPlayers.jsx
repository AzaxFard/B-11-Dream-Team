import PropTypes from 'prop-types'
import SelectedPlayer from '../player/SelectedPlayer';

const SelectedPlayers = ({selectedPlayers, showAllPlayers}) => {
    return (
        <div className="w-10/12 mx-auto ">
            <div className="ShowSelected flex flex-col gap-3 mb-5 border rounded-xl p-3">
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.playerId} SelectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
            </div>
            <button className='text-xs border p-3 rounded-xl bg-[#E7FE29]' onClick={showAllPlayers}>Add More Players</button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.array,
    showAllPlayers: PropTypes.func
}

export default SelectedPlayers;