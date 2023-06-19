import './Header.css';

const Header = () => {
    return (
        <div className="h-24 flex justify-center items-center">
            <header className='container mx-auto'>
                <nav className='navSection flex justify-between'>
                    <div>
                        <img className="logo w-40" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto:low,f_auto,fl_progressive:steep/images/growth/home-screen/1631097450980-d2de38.png" alt="logo" />
                    </div>
                    <ul className='linkSection flex space-x-6 text-white font-semibold'>
                        <li className='underline-offset-8'><a href="/">Register As A Professional</a></li>
                        <li><a href="/">Help</a></li>
                        <li>
                            <span><a href="/">Login</a></span> / <span><a href="/">Sign Up</a></span>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header