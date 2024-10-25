import logo from '../../assets/logo.png'
import coin from '../../assets/coin.webp'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-10/12 mx-auto my-5'>
            <img className='w-12' src={logo} alt="logo" />
            <div className='flex text-slate-500 items-center gap-9'>
                <div className='flex gap-9 text-xs'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                </div>
                <div className='border rounded-xl px-3 py-1 text-black flex items-center text-xs'>
                        <p>0 Coin</p>
                        <img className='w-7' src={coin} alt="Coin Icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;