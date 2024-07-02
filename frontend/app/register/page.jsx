'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { useState } from 'react'



const initialValues = {
  firstName:'',
  lastName:'',
  username:'',
  password:''
}


export default function page() {
  const[formValues , setFormValues] = useState("")

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('...', formValues);

  };


  return (
    <main className="h-screen relative">
      <div className="flex flex-col justify-center items-center h-screen font-mono">
        <form onSubmit={handleSubmit} className="md:w-[500px] bg-[#ffffff16] w-[350px] p-5 shadow-md shadow-neutral-100 space-y-5">
          <h1 className="text-3xl text-white font-semibold text-center">Register</h1>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />
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
          <Button fullWidth type="submit">Register</Button>
          
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

