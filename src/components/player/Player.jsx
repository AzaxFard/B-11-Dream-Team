import PropTypes from 'prop-types';

const Player = ({player, handleSelectedPlayers}) => {
    const {name, country, image, role, battingType, bowlingType, biddingPrice} = player;
    return (
        <div className='p-4 border rounded-xl'>
            <div className='rounded-xl border bg-slate-400 mb-2'>
                <img className='w-full' src={image} alt={`Picture of ${name}`} />
            </div>
            <p className='font-bold'><i className="fa-solid fa-user"></i> {name}</p>
            <div className='flex justify-between items-center mb-2 text-xs font-bold text-slate-500'>
                <p><i className="fa-solid fa-flag"></i> {country}</p>
                <div className='p-2 border rounded-md bg-slate-100'>{role}</div>
            </div>
            <hr />
            {/* <p>Rating</p> */}
            <div className='flex justify-between items-center my-2 text-xs font-bold'>
                <p>{battingType}</p>
                <p className='text-slate-500'>{bowlingType}</p>
            </div>
            <div className='flex justify-between items-center my-2 text-xs font-bold'>
                <p>Price: ${biddingPrice}</p>
                <button className='border p-2 rounded-md text-slate-500' onClick={() => handleSelectedPlayers(player)} >Choose Player</button>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayers: PropTypes.func
}
export default Player;