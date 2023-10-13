import React, { useState } from 'react';
import config from '../config';
import { useNavigate, Link } from 'react-router-dom';

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
        <div style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.QdEXYjcxXGpEYds_749dZwHaFP?pid=ImgDet&w=1322&h=936&rs=1')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '20px', width: '50vw', height: '500px' }} className='container my-5'>
            <h1 className='text-center my-3'><span style={{ background: 'cyan' }} className='rounded px-5'>Login</span></h1>
            <i style={{ fontSize: '80px', display: 'flex', justifyContent: 'center' }} className="text-center fa-regular fa-user"></i>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className='m-2  text-center fs-5'>
                    <span className='text-center'>New to SelelctNotes ?</span> <br />
                    <Link className='text-center text-danger text-decoration-none' to={'/Signup'} >Create an Account</Link>
                </div>
            </form>
        </div>
    );
}
