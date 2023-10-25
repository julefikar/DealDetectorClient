import React from 'react';
import BestPrice from '../../images/best_price.png';
import LoginIcon from '@mui/icons-material/Login';
import SearchBar from '../Miscellaneous/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <Link
                        to='/contact'
                        className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition'
                    >
                        Contact Us
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;
