import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className='bg-black relative'>
      <h1>This is a login screen</h1>

      {/* Logo */}

      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
        <Image
          className='object-cover rounded-full'
          src='https://links.papareact.com/3pi'
          height={200}
          width={200}
          alt="meta's logo"
        />

        <button
          className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'
          onClick={authenticate}>
          Login to metaverse
        </button>
      </div>

      <div className='w-full h-screen relative'>
        <Image
          src='https://links.papareact.com/55n'
          layout='fill'
          objectFit='cover'
          alt="meta's background"
        />
      </div>
    </div>
  );
};

export default Login;
