import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './components/layout';

import DataList from './components/products/DataList';
import TopCategories from './components/TopPage/TopPage/TopCategories';

export async function getServerSideProps() {
  //const response = await fetch('http://localhost:3000/api/moviesdb');//local
  const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb');//deployment
  const data = await response.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ジャルジャルDB</title>
        <meta name="description" content="Generated by a fan of Jarujaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Layout header='ジャルジャルDB'>
            <TopCategories/>
            <DataList
              data={data}
            />
          </Layout>
        </div>
      </main>
    </div>
  )
}
