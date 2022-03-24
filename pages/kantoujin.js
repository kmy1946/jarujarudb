import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AllSearch from './components/AllSearch/AllSearch';
import Footer from './components/base/Footer/Footer';
import Layout from './components/layout';

import DataList from './components/products/DataList';
import TopCategories from './components/TopPage/TopPage/TopCategories';

export async function getServerSideProps() {
  //const response = await fetch('http://localhost:3000/api/moviesdb');//local
  const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb/kantoujin');//deployment
  const data = await response.json();

  return { props: { data } };
}

export default function Kantoujin({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ジャルジャルDB</title>
        <meta name="description" content="Generated by a fan of Jarujaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <AllSearch/>
          <Layout header='ジャルジャルDB'>
          
          <br/>
            <DataList
              data={data}
            />
            <TopCategories/>
          </Layout>
        </div>
      </main>
      <Footer/>
    </div>
  )
}