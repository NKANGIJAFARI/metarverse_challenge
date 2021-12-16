import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Metaverse challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h2>Welcome to the metaverse</h2>
    </div>
  );
}
