import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import HomepageImage from '../../images/homepage_image.png';
import './Body.css';

const Body = () => {
    return (
        <div className="Body">
            <div className="FrontAd">
                <h1 className="Bigtext">
                    Discover the best deals and prices with DealDetector!
                </h1>
                <p className="Littletext">
                    DealDetector scours the web to bring you the most
                    cost-effective options for your desired products. Never
                    overpay again.
                </p>
                <img
                    src={HomepageImage}
                    alt='Animated man thinking about what to buy'
                    className="Image"
                />
            </div>

            <div className="IconList">
                <div className="IconStyle">
                    <NotificationsIcon fontSize='large' className='text-jet' />
                    <p className="IconDescription">Notifications</p>
                </div>

                <div className="IconStyle">
                    <FavoriteIcon fontSize='large' className='text-jet' />
                    <p className="IconDescription">Favorites</p>
                </div>

                <div className="IconStyle">
                    <CompareIcon fontSize='large' className='text-jet' />
                    <p className="IconDescription">Compare Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Body;
