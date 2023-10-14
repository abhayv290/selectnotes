import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

function Signup(props) {
    const [credential, setCredential] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredential({ ...credential, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = config.apiBaseUrl + '/User';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: credential.username, email: credential.email, password: credential.password })
            });
            const json = await response.json();
            if (json.success) {
                console.log(json);
                navigate('/');
                props.showAlert('SignedUP', 'success');
            }
            else {
                props.showAlert('Invalid Credential', 'danger');
            }


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.QdEXYjcxXGpEYds_749dZwHaFP?pid=ImgDet&w=1322&h=936&rs=1')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '20px', maxWidth: '80%', height: '500px' }} className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className='text-center my-3'><span style={{ background: 'cyan' }} className='rounded px-5'>Sign Up</span></h1>
                    <i style={{ fontSize: '80px', display: 'flex', justifyContent: 'center' }} className="text-center fa-regular fa-user"></i>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={credential.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={credential.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={credential.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
