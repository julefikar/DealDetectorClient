import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Homepage/Header';
import Body from './components/Homepage/Body';
import Footer from './components/Homepage/Footer';
import Login from './components/Homepage/Login';
import Register from './components/Homepage/Register';
import { AuthProvider } from './components/Authorization/AuthContext';
import './index.css';
import Results from './components/ResultsPage/Results';
import FavoritesPage from './components/Favorites/FavoritesPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Body />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/results' element = {<Results/>}/>
                        <Route path='/favorites' element = {<FavoritesPage/>}/>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
