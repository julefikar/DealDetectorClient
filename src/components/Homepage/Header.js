import React, { useState } from "react";
import BestPrice from "../../images/best_price.png";
import LoginIcon from "@mui/icons-material/Login";
import Login from './Login';
import Register from './Register';
import SearchBar from '../Miscellaneous/SearchBar';

const Header = () => {
    const [modalType, setModalType] = useState('none');  // 'none', 'login', or 'register'

    return (
        <div className="flex flex-col bg-ashGray p-3 shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <img src={BestPrice} alt="Best Price" className="w-16 h-16" />
                    <h1 className="text-2xl font-bold text-jet">DealDetector</h1>
                </div>
                <div className="flex-grow-2">
                    <SearchBar />
                </div>
                <div className="flex space-x-2">
                    <button 
                        onClick={() => setModalType('login')} 
                        className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
                    >
                        <LoginIcon fontSize="small" />
                        <span>Login</span>
                    </button>
                    <button 
                        onClick={() => setModalType('register')} 
                        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition"
                    >
                        Register
                    </button>
                </div>
            </div>
            {modalType === 'login' && <Login closeModal={() => setModalType('none')} />}
            {modalType === 'register' && <Register closeModal={() => setModalType('none')} />}
        </div>
    );
};

export default Header;
