import Image from "next/image";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import 'process/browser';


export default function Home() {
  return (
    <main className="h-screen relative ">
      <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="md:text-5xl text-2xl text-center text-secondary font-semibold font-mono shadow-white-md md:mt-0 mt-32">Welcome to Our <span className="md:text-white md:bg-secondary md:p-2 md:px-4">Web Application</span></h1>
      <p className="hidden md:flex text-accent text-sm text-center  md:w-[900px] xl:w-[1200px] font-medium font-mono mt-2">Welcome to our web application! This platform provides a seamless user experience for managing your bookings and reservations. Whether you're looking to book a room or manage your existing reservations, our application is designed to make the process easy and efficient.</p>
    
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
  <Link href="/login" className="w-[280px] h-[280px] flex flex-col items-center justify-center bg-[#ffffff35] rounded-3xl shadow-sm shadow-neutral-100 space-y-2 hover:bg-secondary transition duration-300 ease-in-out">
    <FaUserAstronaut className="text-white text-9xl" />
    <h2 className="text-primary text-2xl font-mono">Login</h2>
  </Link>
  <Link href="/register" className="w-[280px] h-[280px] flex flex-col items-center justify-center bg-[#ffffff35] rounded-3xl shadow-sm shadow-neutral-100 space-y-2 hover:bg-secondary transition duration-300 ease-in-out">
    <FaUsersGear className="text-white text-9xl " />
    <h2 className="text-primary text-2xl font-mono">Register</h2>
  </Link>
</div>

    

    <video 
    src={require('../components/Assets/3141207-uhd_3840_2160_25fps.mp4')} 
    autoPlay
    loop
    muted
    className="absolute top-0 -z-20 w-[100%] md:h-[100%] h-[900px] object-cover"
    />
      </div>

    
    </main>
  );
}
