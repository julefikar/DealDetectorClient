import React from 'react';
import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
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
