import {React, useEffect} from "react";

import {Vortex} from 'react-loader-spinner';

const LoadingScreen = ()=>{
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'visible';
    }, [])
    return(
        <div style={
            {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(50, 50, 50, 0.8)',
                zIndex: 999,

            }
        }>
            <Vortex color="#00BFFF" height={80} width={80} /> 
        </div>
    )
}

export default LoadingScreen;