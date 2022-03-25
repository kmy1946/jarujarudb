import { Button } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Footer from './components/base/Footer/Footer';
import Layout from './components/layout';

import DataList from './components/products/DataList';
import TopCategories from './components/TopPage/TopPage/TopCategories';

export async function getServerSideProps(context) {
  //const paged = context.query.paged ?? 1
  // 表示数の指定（APIデフォルトは10）
  const per = 10

  const { page } = context.query;
  //const page = context.query.page;
  const params = {
    method: "GET",
    body: page
  }
  //const response = await fetch('http://localhost:3000/api/moviesdb/moviesdb');//local
  const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb/moviesdb');//deployment
  const data = await response.json();

  return {
    props:{
      data,
      page:+page
    }
  };
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
