import React from 'react';
import MagicBell, { FloatingNotificationInbox, flatTheme } from '@magicbell/magicbell-react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import HomepageImage from '../../images/homepage_image.png';
import './Body.css';
import { Troubleshoot } from '@mui/icons-material';


const Body = () => {
    const distanceAlongRef = 450;
    const distanceAwayFromRef = 60;

    const stores = [
        { id: 'unread', defaultQueryParams: { read: false } },
        { id: 'read', defaultQueryParams: { read: true } },
    ];

    const tabs = [
        { storeId: 'unread', label: 'Latest' },
        { storeId: 'read', label: 'Archive' },
    ];

    const theme = {
        icon: { borderColor: '#100F0F', width: '35px' },
        header: {
            fontFamily: 'sans-serif',
            fontSize: '20px',
            backgroundColor: '#BFDBF7',
            textColor: 'black',
            borderRadius: '2px',
        },
        footer: { backgroundColor: '#BFDBF7' },
    };

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
                <div className="IconList">
                    <div className='IconStyle'>
                        <div className='IconStyle'>

                            <MagicBell apiKey="080c96f8332b791422fced98b75aea47ce1876bb"
                                stores={stores}
                                userEmail="dealdetectorbusiness@gmail.com"
                                theme={theme}
                            >
                                {(props) =>
                                    <FloatingNotificationInbox height={250}
                                        tabs={tabs}
                                        notificationPreferencesEnabled={false}
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
                    </div>

                    <div className="IconStyle">
                        <Link to = '/favorites'>
                            <FavoriteIcon fontSize='large' className='text-jet' />
                            <p className="IconDescription">Favorites</p>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Body;
