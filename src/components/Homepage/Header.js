import React, { useContext } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import BestPrice from '../../images/best_price.png';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout'; // Import Logout icon
import SearchBar from '../Miscellaneous/SearchBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import './Header.css';

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);

        // refresh
        navigate(0);
    };

    return (
        <div className="Header">
            <div className="Items">
                <Link
                    to='/'
                    className="SiteIcon"
                >
                    <img
                        src={BestPrice}
                        alt='Best Price'
                        className='w-16 h-16'
                    />
                    <h1 className="SiteName">
                        DealDetector
                    </h1>

                </Link>

                <div className="SearchBar">
                    <SearchBar />
                </div>

                <label for="toggle">
                    {isLoggedIn ? (
                        // logged in small window size
                        <button
                            onClick={handleLogout}
                        >
                            <LogoutIcon fontSize='large' />
                        </button>
                    ) : (
                        // logged out small window size
                        <button>
                            <Link
                                to='/login'
                            >
                                <LoginIcon fontSize='large' />
                            </Link>
                        </button>
                    )}
                </label>

                <input type="checkbox" id="toggle" />

                <div className="LoginBar">

                    {isLoggedIn ? (
                        // Show logout button if logged in
                        <button
                            onClick={handleLogout}
                            className="LogOut"
                        >
                            <LogoutIcon fontSize='small' />
                            <span>Logout</span>
                        </button>
                    ) : (
                        // Show login and register links if not logged in
                        <>
                            <Link
                                    to='/login' // refresh="true" // make true when implemented stay logged in
                                    className="LogIn"
                            >
                                <LoginIcon fontSize='small' />
                                <span>Login</span>
                            </Link>
                            <Link
                                    to='/register' // refresh="true"
                                    className="Register"
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
