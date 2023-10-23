import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import HomepageImage from '../../images/homepage_image.png';

const Body = () => {
    return (
        <div className='flex flex-col lg:flex-row p-10 text-center bg-ashGray items-center justify-around'>
            <div className='flex-1 mb-8 lg:mb-0 lg:mr-10'>
                <h1 className='text-3xl font-bold text-jet mb-5'>
                    Discover the best deals and prices with DealDetector!
                </h1>
                <p className='mt-5 text-xl text-jet mb-8'>
                    DealDetector scours the web to bring you the most
                    cost-effective options for your desired products. Never
                    overpay again.
                </p>
                <img
                    src={HomepageImage}
                    alt='Animated man thinking about what to buy'
                    className='w-full lg:w-3/4 mx-auto rounded-md'
                />
            </div>

            <div className='flex-1 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8'>
                <div className='flex flex-col items-center group hover:scale-110 transform transition-transform duration-300'>
                    <NotificationsIcon fontSize='large' className='text-jet' />
                    <p className='mt-4 text-xl text-jet'>Notifications</p>
                </div>

                <div className='flex flex-col items-center group hover:scale-110 transform transition-transform duration-300'>
                    <FavoriteIcon fontSize='large' className='text-jet' />
                    <p className='mt-4 text-xl text-jet'>Favorites</p>
                </div>

                <div className='flex flex-col items-center group hover:scale-110 transform transition-transform duration-300'>
                    <CompareIcon fontSize='large' className='text-jet' />
                    <p className='mt-4 text-xl text-jet'>Compare Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Body;
