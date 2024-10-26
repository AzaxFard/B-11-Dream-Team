import PropTypes from 'prop-types';

const SelectedPlayer = ({SelectedPlayer}) => {

    const{name, image, battingType} = SelectedPlayer;
    return (
        <div className="p-3 border rounded-xl flex justify-between items-center">
            <div className='flex'>
                <div className='w-12 border rounded-xl bg-slate-400 mr-2'>
                    <img src={image} alt={`picture of ${name}`} />
                </div>
                <div>
                    <h3 className='font-bold'>{name}</h3>
                    <p className='text-xs text-slate-400'>{battingType}</p>
                </div>
            </div>
            <div>
                <button>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    SelectedPlayer: PropTypes.object.isRequired
}

export default SelectedPlayer;