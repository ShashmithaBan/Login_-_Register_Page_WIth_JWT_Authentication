"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const initialValues ={
  username:"",
  password:""
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formValues)

    try {
      const response = await fetch('http://localhost:5454/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
        mode: 'cors'
      });

      const data = await response.json();

      if (response.ok) {
        
        localStorage.setItem('token', data.token);
        setMessage(data.message)
        
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setError('Something went wrong!');
    }
  };


  return (
    <main className="h-screen relative">
      <div className="flex flex-col justify-center items-center h-screen font-mono">
        <form onSubmit={handleSubmit} className="md:w-[500px] bg-[#ffffff16] w-[350px] p-5 shadow-md shadow-neutral-100 space-y-5">
          <h1 className="text-3xl text-white font-semibold text-center">Login</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && <p className="text-green-500 text-center w-[100%] bg-green-200 p-2 border-2 border-green-500">{message}</p>}
          <Input
            type="text"
            name="username"
            placeholder="User Name"
            value={formValues.username}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <Button fullWidth type="submit">Login</Button>
          <p className="text-white text-center">
            Don't have an account? <button type="button"  ><Link href='/register'>Register</Link></button>
          </p>
        </form>

        <video 
          src={require('../../components/Assets/3141207-uhd_3840_2160_25fps.mp4')}
          autoPlay
          loop
          muted
          className="absolute top-0 -z-20 w-full md:h-full h-[900px] object-cover"
        />
      </div>
    </main>
  );
}
