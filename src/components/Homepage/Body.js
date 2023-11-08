import React from 'react';
import MagicBell, { FloatingNotificationInbox, flatTheme } from '@magicbell/magicbell-react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import HomepageImage from '../../images/homepage_image.png';
import { Troubleshoot } from '@mui/icons-material';

const Body = () => {
    return (
        <div className='flex flex-col lg:flex-row p-10 text-center bg-[#BFDBF7] items-center justify-around'>
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

                <MagicBell apiKey="080c96f8332b791422fced98b75aea47ce1876bb"
                           stores={stores}
                           userEmail="dealdetectorbusiness@gmail.com"
                           theme = {theme}
                >
                {(props) => 
                <FloatingNotificationInbox height={250} 
                                           tabs={tabs}
                                           notificationPreferencesEnabled = {false}
                                           placement="bottom-end"
                                           popperOptions={{
                                            modifiers: [
                                              {
                                                name: 'offset',
                                                options: {
                                                  offset: [distanceAlongRef, distanceAwayFromRef],
                                                },
                                              },
                                            ],
                                          }} 
                                          {...props}
                />
                }
                </MagicBell>
           
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

    const distanceAlongRef = 450;
    const distanceAwayFromRef = 60;

    const stores = [
        { id: 'unread', defaultQueryParams: {read: false} },
        { id: 'read', defaultQueryParams: { read: true } },
      ];
      
    const tabs = [
        { storeId: 'unread', label: 'Latest' },
        { storeId: 'read', label: 'Archive' },
    ];
    
    const theme = {
        icon: { borderColor: '#100F0F', width: '35px'},
        header: {
        fontFamily: 'sans-serif',
        fontSize: '20px',
        backgroundColor: '#BFDBF7',
        textColor: 'black',
        borderRadius: '2px',
        },
        footer: { backgroundColor: '#BFDBF7' },
    }

export default Body;
