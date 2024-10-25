import bannerLogo from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="bg-black w-10/12 mx-auto my-5 text-white text-center flex flex-col items-center rounded-xl py-8 gap-5 bg-[url('https://i.ibb.co.com/zJ4tCBv/bg-shadow.png')]">
            <div className='w-40'>
                <img className='w-full' src={bannerLogo} alt="Banner Logo" />
            </div>
            <h3 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <p className='text-slate-400'>Beyond Boundaries Beyond Limits</p>
            <button className='text-black text-xs font-bold border border-8 border-double border-black rounded-xl p-3 bg-[#E7FE29]'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;