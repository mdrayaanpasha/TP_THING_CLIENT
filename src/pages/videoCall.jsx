// src/pages/videoCall.jsx
import { useEffect, useState } from 'react';
import JitsiCall from './jitsi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Vcall() {
    const [roomName, setRoomName] = useState(null);
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('dost_token');
        if (!token) {
            toast.error('You must be logged in to access the call.');
            navigate('/auth');
            return;
        }

        const fetchRoomDetails = async () => {
            try {
                const res = await fetch('https://apidost.vercel.app/api/therapy/video-call-room', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || 'Access denied');
                }

                const data = await res.json();
                setRoomName(data.roomName);
                setUsername(data.username);
            } catch (err) {
                console.error('Video call error:', err.message);
                toast.error(err.message || 'You are not allowed to join this call right now.');
                navigate('/my-sessions');
            }
        };

        fetchRoomDetails();
    }, [navigate]);

    if (!roomName || !username) return <p className="text-center mt-8 text-gray-700">🔍 Verifying session...</p>;

    return <JitsiCall roomName={roomName} userName={username} />;
}
