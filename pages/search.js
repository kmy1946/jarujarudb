import Head from 'next/head';
import { Button, Grid, Divider, TextField, IconButton, Pagination as MuiPagination, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

import styles from '../styles/Home.module.css';
import stylesDataList from '../styles/Datalist.module.css';
import stylesSearch from '../styles/AllSearch.module.css';

import Layout from './components/layout';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Loading2 from './components/UIkits/Loading2';

export default function Search() {//{ data }
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [netanotaneList, setNetanotaneList] = useState([]);//取得した本のリスト

  const [searchKeyword, setSearchKeyword] = useState("ジャルジャル");

  const inputSearchKeyword = useCallback((event) => {
        setSearchKeyword(event.target.value)
  }, [setSearchKeyword]);

  useEffect(async () => {
    setNetanotaneListAPI(page, searchKeyword);
  }, []);

  const clickPage = (e, page) => {
    setPage(page);
    setNetanotaneListAPI(page, searchKeyword);
  };

  const clickSearchButton = (e) => {
    setNetanotaneListAPI(page, searchKeyword);
  }

  //取得データのセットと総データ件数をセットする
  const setNetanotaneListAPI = async(page, searchKeyword) => {
    const response = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/allsearch?page=${page}&searchKeyword=${searchKeyword}`);
    //const response = await fetch(`http://localhost:3000/api/moviesdb/allsearch?page=${page}&searchKeyword=${searchKeyword}`)
    const data = await response.json();

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
        <title>ジャルジャルDB キーワード検索</title>
        <meta name="description" content="Generated by a fan of Jarujaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <br/><br/><br/><br/>
            <TextField
              fullWidth={false} label={"キーワード検索"}
              multiline={false}
              size="small"
              onChange={inputSearchKeyword}
              value={searchKeyword}
              required={false} rows={1} 
              type={"text"}
              className={stylesSearch.all_search_textfield}
            />
            <IconButton>    
          </IconButton>
        </div>
        <br/>
        <div className={stylesSearch.all_search_search_button}>
          <Button
            onClick={clickSearchButton}
            className={stylesSearch.all_search_search_button_button}
          >
            検索
            <SearchIcon />
          </Button>
        </div>
        <Divider/>

        <div className={styles.container}>
          <Layout header='ジャルジャルDB'>
            <br/>

          <Grid container direction="column">
        <Grid container className={styles.datalist}>
                
        {netanotaneList.length > 0 ? (
            netanotaneList.map((data) => {
              const beforestr = data.url
              const regex = /(?<=v=)(.*)/
              const result = beforestr.match(regex);
              const urlv = result[0]
              
              let gotolink = 'https://www.youtube.com/watch?v='+urlv
              const viewstext = ' 回視聴'
              return (
                <Grid item xs={12} sm={3} key={data.no}>
                  <Card className={stylesDataList.datalist_card}>
                    <CardActionArea href={gotolink} target='_blank'>
                      <Image src={data.thumbnail} width={462} height={260} />
                      <p className={`${stylesDataList.datalist_duration}`}>
                        {data.duration}
                      </p>
                      <CardContent style={{ height:"180px" }}>
                      <p className={stylesDataList.datalist_title}>
                        {data.title}
                       </p>
                      <p>
                        {data.detail}
                      </p>
                      <p className={stylesDataList.datalist_created_at}>
                        {data.created_at}
                      </p>
                      <p className={stylesDataList.datalist_views}>
                        {data.views}{viewstext}
                      </p>
                      </CardContent>
                      <div className={stylesDataList.datalist_gotolink__group}>
                        <Button size="small" className={stylesDataList.datalist_gotolink}>動画をみる</Button>
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
                )})
                ):(
                  <Loading2/>
                )}
                
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
          <br/><br/>
          </Layout>
        </div>
      </main>
    </div>
  )
}