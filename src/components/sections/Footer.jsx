import logoFooter from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="bg-[#06091A]">
            {/* subscribe to newsletter section */}
            <div className="w-10/12 mx-auto p-4 border rounded-xl relative bottom-32">
                <div className=" bg-white text-center items-center flex flex-col gap-2 border rounded-xl py-14 bg-[url('https://i.ibb.co.com/zJ4tCBv/bg-shadow.png')] bg-cover">
                    <h3 className="font-bold text-xl">Subscribe to our Newsletter</h3>
                    <p className="text-slate-600 text-xs">Get the latest updates and news right in your inbox!</p>
                    <div>
                    <input className="py-3 px-4 border rounded-xl w-80 mr-4 text-xs" type="email" placeholder="Enter your email"/>
                    <button className="border rounded-xl py-3 px-4 font-bold text-xs bg-gradient-to-r from-pink-400 to-orange-400">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* footer main section */}
            <div className='flex flex-col items-center text-white '>
                <div className='w-32 relative bottom-16'>
                    <img className='w-full' src={logoFooter} alt="logo" />
                </div>
                <div className='w-10/12 mx-auto flex justify-between pb-12'>
                    <div>
                        <h5 className='mb-3'>About Us</h5>
                        <p className='text-xs text-slate-400'>We are a passionate team <br /> dedicated to providing the best <br />services to our customers.</p>
                    </div>
                    <div>
                        <p className='mb-3'>Quick Links</p>
                        <ul className='flex flex-col gap-2 text-slate-400 text-xs'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-3'>Subscribe</p>
                        <p className='text-xs text-slate-400 pb-3'>Subscribe to our newsletter for the <br /> latest updates.</p>
                        <input className="py-3 px-4  rounded-xl w-56 mr-1 text-xs" type="email" placeholder="Enter your email"/>
                        <button className="rounded-xl py-3 px-4 font-bold text-xs bg-gradient-to-r from-pink-400 to-orange-400">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-slate-400 text-center text-xs py-5'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;