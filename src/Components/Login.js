import React, { useState } from 'react';
import config from '../config';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credential, setCredential] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = config.apiBaseUrl + '/login';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credential.email, password: credential.password })
            });
            const json = await response.json();
            if (json.success) {
                console.log(json);
                // SAve the Auth token and redirect
                localStorage.setItem('token', json.authtoken);
                navigate('/');
            }

        } catch (error) {
            console.log(error);

        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
