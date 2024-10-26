import PropTypes from 'prop-types';

const SelectedPlayer = ({SelectedPlayer}) => {

    const{name, image, battingType} = SelectedPlayer;
    return (
        <div className="p-3 border rounded-xl flex">
            <div className='w-12 border rounded-xl bg-slate-400 mr-2'>
                <img src={image} alt={`picture of ${name}`} />
            </div>
            <div>
                <h3 className='font-bold'>{name}</h3>
                <p className='text-xs text-slate-400'>{battingType}</p>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    SelectedPlayer: PropTypes.object.isRequired
}

export default SelectedPlayer;