
import profileImage from '../../assets/images/images.jpg';
import Home from '../Home/Home';

import './Header.css';


const Header = () => {

    
    return (
        <div >
            <nav className='header'>
                <div>
                    <h1 className='text-3xl font-bold ms-8'>Knowledge Cafe</h1>
                </div>
                <img src={profileImage} alt="this is profile picture" />
            </nav>
            <span className='underline'>
                <hr />
            </span>

            

            
        </div>
    );
};

export default Header;