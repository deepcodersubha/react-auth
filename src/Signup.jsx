
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(data => {
                console.log(data)
                navigate('/login')
                console.log(`Successfully registered! ${name}`)
                
            })
            .catch(err => console.log(err));
        console.log('Form submitted:', name, email, password);
    };



    return (
        <div className="container mx-auto mt-10">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <label className="block mb-2 text-lg" htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label className="block mt-4 mb-2 text-lg" htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="block mt-4 mb-2 text-lg" htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="mt-6 bg-blue-500 text-white p-3 rounded"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
