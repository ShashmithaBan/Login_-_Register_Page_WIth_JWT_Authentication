"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('...', username, password);

  };


  return (
    <main className="h-screen relative">
      <div className="flex flex-col justify-center items-center h-screen font-mono">
        <form onSubmit={handleSubmit} className="md:w-[500px] bg-[#ffffff16] w-[350px] p-5 shadow-md shadow-neutral-100 space-y-5">
          <h1 className="text-3xl text-white font-semibold text-center">Login</h1>
          <Input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button fullWidth type="submit">Login</Button>
          <p className="text-white text-center">
            Don't have an account? <button type="button"  >Register</button>
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
