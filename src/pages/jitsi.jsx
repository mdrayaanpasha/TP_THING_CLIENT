import React, { useEffect, useRef, useState } from 'react';

const JitsiCall = ({ roomName = "MySuperCoolRoom" }) => {
    const jitsiContainerRef = useRef(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        // If Jitsi script is already loaded, skip
        if (window.JitsiMeetExternalAPI) {
            setScriptLoaded(true);
            return;
        }

        // Dynamically inject script
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (!scriptLoaded) return;

        const domain = 'meet.jit.si';
        const options = {
            roomName,
            width: '100%',
            height: 600,
            parentNode: jitsiContainerRef.current,
            interfaceConfigOverwrite: {
                SHOW_JITSI_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Dev',
            },
            configOverwrite: {
                disableDeepLinking: true,
            },
        };

        const api = new window.JitsiMeetExternalAPI(domain, options);

        return () => api?.dispose();
    }, [scriptLoaded, roomName]);

    return (
        <div>
            <h2>🔴 Live Call: {roomName}</h2>
            {!scriptLoaded && <p>Loading video call interface...</p>}
            <div ref={jitsiContainerRef} style={{ width: '100%', height: '600px' }} />
        </div>
    );
};

export default JitsiCall;
