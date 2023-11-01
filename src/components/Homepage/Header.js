import React, { useContext } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import BestPrice from '../../images/best_price.png';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout'; // Import Logout icon
import SearchBar from '../Miscellaneous/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className='flex flex-col bg-ashGray p-3 shadow-md mb-8'>
            <div className='flex justify-between items-center mb-4'>
                <Link
                    to='/'
                    className='flex items-center space-x-2 hover:text-jet transition'
                >
                    <img
                        src={BestPrice}
                        alt='Best Price'
                        className='w-16 h-16'
                    />
                    <h1 className='text-2xl font-bold text-jet'>
                        DealDetector
                    </h1>
                </Link>
                <div className='flex-grow-2'>
                    <SearchBar />
                </div>
                <div className='flex space-x-4'>
                    {isLoggedIn ? (
                        // Show logout button if logged in
                        <button
                            onClick={handleLogout}
                            className='flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition'
                        >
                            <LogoutIcon fontSize='small' />
                            <span>Logout</span>
                        </button>
                    ) : (
                        // Show login and register links if not logged in
                        <>
                            <Link
                                to='/login'
                                className='flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition'
                            >
                                <LoginIcon fontSize='small' />
                                <span>Login</span>
                            </Link>
                            <Link
                                to='/register'
                                className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition'
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
