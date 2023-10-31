import React, { useState, useEffect } from 'react';
import config from '../config';


export default function Account(props) {
    // const BASE_URL = `${process.env.REACT_APP_BASE_URL}/myaccount`;
    const url = `${config.apiBaseUrl}/myaccount`;
    // console.log(BASE_URL);
    const myauth = localStorage.getItem('token');
    const [user, setUser] = useState({
        username: '',
        email: '',
        date: ''
    });

    useEffect(() => {
        (async () => {
            try {
                if (myauth != null) {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'auth-token': myauth
                        }
                    });
                    const json = await response.json();
                    // Convert the server-provided date to local time
                    const serverDate = new Date(json.date);
                    const localDate = serverDate.toLocaleString();
                    const myuser = {
                        username: json.username,
                        email: json.email,
                        date: localDate
                    }
                    setUser(myuser);
                } else {
                    console.log('login first');
                }
            } catch (error) {
                console.log(error);
            }
        })();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <div className='d-flex justify-content-center'>
            <div className="card" style={{ width: '20rem' }}>
                <img src="https://icon-library.com/images/profile-icon/profile-icon-20.jpg" className="card-img-top" alt="Profile" height={'300px'} />
                <div className="card-body">
                    <h2 className="card-title text-center "><strong>My Profile</strong></h2>
                    <h6 className='card-text text-center text-danger'><b>{user.username}</b></h6>
                    <h6 className='card-text text-center'><span>{user.email}</span></h6>
                    <h6 className='card-text text-center'><span>password: <sub>************</sub> </span></h6>
                    <p className='card-text text-center'>{user.date}</p>
                </div>
            </div>
        </div>
    )
}
