import React from 'react';
import Tooltip from '@mui/material/Tooltip';
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
                            <Tooltip title="Stay up to date with the best new deals!" placement="top">
                                <NotificationsIcon fontSize='large' className='text-jet' />
                            </Tooltip>
                            <p className="IconDescription">Notifications</p>
                        </div>

                        <div className="IconStyle">
                            <Tooltip title="Save your favorite deals!" placement="top">
                                <FavoriteIcon fontSize='large' className='text-jet' />
                            </Tooltip>
                            <p className="IconDescription">Favorites</p>
                        </div>
                    
                        <div className="IconStyle">
                            <Tooltip title="Find the best price among many options!" placement="top">
                                <CompareIcon fontSize='large' className='text-jet' />
                            </Tooltip>
                            <p className="IconDescription">Compare Pricing</p>
                        </div>
            </div>
        </div>
    );
};

export default Body;
