import Head from 'next/head';
import Login from '../Components/Login';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  console.log(isAuthenticated, 'isAuthenticated');

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen '>
      <Head>
        <title>Metaverse challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full h-screen relative'>
        <Image src='/Metaverse-virtual.jpg' layout='fill' objectFit='cover' />
        <div
          className='bg-white p-20 flex flex-col justify-center align-center h-200 absolute'
          style={{
            posistion: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}>
          <h2 className='mb-7 font-bold text-xl'>Welcome to the metaverse</h2>

          <button
            onClick={logout}
            className=' rounded bg-black text-white py-2 px-3'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
