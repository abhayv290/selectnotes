import React, { useState } from 'react';
import config from '../config';
import { useNavigate, Link } from 'react-router-dom';

export default function Login(props) {
    const [credential, setCredential] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${config.apiBaseUrl}/login`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credential.email, password: credential.password }),
            });

            if (response.ok) {
                const json = await response.json();
                if (json.success) {
                    localStorage.setItem('token', json.authtoken);
                    navigate('/');
                    props.showAlert('Logged in', 'success');
                } else {
                    props.showAlert('Invalid Credentials', 'danger');
                }
            } else {
                props.showAlert('Invalid Credentials', 'danger');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    return (
        <div
            style={{
                backgroundImage: "url('https://th.bing.com/th/id/OIP.QdEXYjcxXGpEYds_749dZwHaFP?pid=ImgDet&w=1322&h=936&rs=1')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '20px',
                maxWidth: '500px',
                height: '500px',
            }}
            className="container mydiv my-5 ">





            <h1 className="text-center my-3">
                <span style={{ background: 'cyan' }} className="rounded px-5">
                    Login
                </span>
            </h1>
            <i
                style={{ fontSize: '80px', display: 'flex', justifyContent: 'center' }}
                className="text-center fa-regular fa-user"
            ></i>
            <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control md:w-50 align"
                        id="exampleInputPassword1"
                        name="password"
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                <div className="m-2 text-center fs-5">
                    <span className="text-center">New to SelectNotes?</span> <br />
                    <Link to="/Signup" className="text-center  icon-link-hover text-danger text-decoration-none">
                        Create an Account
                    </Link>
                </div>
            </form>
        </div>
    );
}
