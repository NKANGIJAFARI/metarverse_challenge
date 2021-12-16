import Head from 'next/head';
import Login from '../Components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  console.log(isAuthenticated, 'isAuthenticated');

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Metaverse challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h2>Welcome to the metaverse</h2>

      <button onClick={logout}>LogOut</button>
    </div>
  );
}
