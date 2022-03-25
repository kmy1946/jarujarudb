import Head from 'next/head';
import { Grid, Pagination as MuiPagination } from '@mui/material';
import { withStyles } from '@mui/styles';

import styles from '../styles/Home.module.css';
import AllSearch from './components/AllSearch/AllSearch';
import Footer from './components/base/Footer/Footer';
import Layout from './components/layout';

import DataList from './components/products/DataList';
import TopCategories from './components/TopPage/TopPage/TopCategories';
import { useEffect, useState } from 'react';
import DatasList from './components/products/DatasList';

/*
export async function getServerSideProps(context) {
  //const response = await fetch('http://localhost:3000/api/moviesdb');//local
  const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb/netanotane');//deployment
  const data = await response.json();

  return { props: { data } };
}
*/

export default function Netanotane({ data }) {//
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [netanotaneList, setNetanotaneList] = useState([]);//取得した本のリスト

  useEffect(async () => {
    setNetanotaneListAPI(page);
  }, []);

  const clickPage = (e, page) => {
    setPage(page);
    setNetanotaneListAPI(page);
  }

  //取得データのセットと総データ件数をセットする
  const setNetanotaneListAPI = async(page) => {
    //const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb/netanotane');//deployment
    const response = await fetch(`http://localhost:3000/api/moviesdb/netanotane?page=${page}`).catch((error) => console.log(error))
    const data = await response.json();

    //console.log('data:\n',data)

    setNetanotaneList(data.rows);//.rows);//取得データ
    setCount(data.count);//総データ件数
  }

  const Pagination = withStyles({
    root: {
      display: 'inline-block',//中央寄せのためインラインブロックに変更
    },
  }) (MuiPagination);


  return (
    <div className={styles.container}>
      <Head>
        <title>ジャルジャルDB ネタのタネ</title>
        <meta name="description" content="Generated by a fan of Jarujaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Layout header='ジャルジャルDB'>
            <br/>

          <Grid container direction="column">
        <Grid container className={styles.datalist}>
                
          {netanotaneList.length > 0 && (
            netanotaneList.map(data => {
              const beforestr = data.url
              const regex = /(?<=v=)(.*)/
              const result = beforestr.match(regex);
              const urlv = result[0]
              
              let gotolink = 'https://www.youtube.com/watch?v='+urlv
              const viewstext = ' 回視聴'
              return (
                <><Grid item xs={12} sm={3} key={data.id}>
                  <DatasList
                    url={data.url} title={data.title} views={data.views} thumbnail={data.thumbnail}
                    created_at={data.created_at}
                    //custom text _etc.
                    gotolink={gotolink} viewstext={viewstext}
                  /></Grid>
                </>
                )}))}
                
                </Grid>
                </Grid>

          <div style={{marginTop: "50px", textAlign: "center"}}>
            <Pagination
              count={count}//総ページ数
              color="primary"
              onChange={clickPage}//変更されたときに走る関数。第2引数にページ番号が入る
              page={page}
            />
          </div>


            <TopCategories/>
          </Layout>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

/*
//import MuiPagination from '@mui/lab/Pagination';
import { Pagination as MuiPagination } from '@mui/material';
import { withStyles } from '@mui/styles';
import {useEffect, useState} from 'react'

export default function ProductDetail() {
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [netanotaneList, setNetanotaneList] = useState([]);//取得した本のリスト

  useEffect(async () => {
    setNetanotaneListAPI(page);
    //console.log('page:\n',page)
  }, []);

  //ページ番号をクリックしたときの処理
  const clickPage = (e, page) => {
    setPage(page);
    setNetanotaneListAPI(page);
  }

  //取得データのセットと総データ件数をセットする
  const setNetanotaneListAPI = async(page) => {
    const response = await fetch(`http://localhost:3000/api/moviesdb/productdetail?page=${page}`);
    const data = await response.json();

    console.log('data:\n',data)

    setNetanotaneList(data.rows);//.rows);//取得データ
    setCount(data.count);//総データ件数
  }

  const Pagination = withStyles({
    root: {
      display: 'inline-block',//中央寄せのためインラインブロックに変更
    },
  }) (MuiPagination);

  return (
    <>
      <ul>
        {netanotaneList.length > 0 && (
          netanotaneList.map(data => (
            <li>{data.title}</li>
          )
        ))}
      </ul>
      
      <div style={{marginTop: "50px", textAlign: "center"}}>

        <Pagination
          count={count}//総ページ数
          color="primary"
          onChange={clickPage}//変更されたときに走る関数。第2引数にページ番号が入る
          page={page}
        />
      </div>
    </>
  );
}
*/