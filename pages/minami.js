import Head from 'next/head';
import { Button, Card, CardActionArea, CardContent, Grid, Pagination as MuiPagination, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

import styles from '../styles/Home.module.css';
import stylesDataList from '../styles/Datalist.module.css';
import Layout from './components/layout';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading2 from './components/UIkits/Loading2';

export default function Netanotane() {
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
    const tag='南';
    const response = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/tag?page=${page}&tag=${tag}`);
    //const response = await fetch(`http://localhost:3000/api/moviesdb/tag?page=${page}&tag=${tag}`)
    const  data = await response.json();

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

          <Grid container direction="column">
        <Grid container className={styles.datalist}>
        {netanotaneList.length > 0 ? (
            netanotaneList.map((data) => {
              const beforestr = data.url;
              //const regex = /(?<=v=)(.*)/;
              const regex = /(?<=(www.youtube.com))(.*)/;
              const result = beforestr.match(regex);
              const urlv = result[0]
              let gotolink = 'https://www.youtube.com'+urlv;
              //console.log(gotolink)
              const viewstext = ' 回視聴'
              
              // duration
              let duration__ = data.duration.replace('.',':');
              const rege1 = /d*:$/;
              const rege2 = /:[0-9]$/;
              if (rege1.test(duration__)) {// 3: ➝ 3
                  duration__ = `${duration__.slice(0, duration__.length -1)}`;
              } if (rege2.test(duration__)) {// 5:3 ➝ 5:03
                const sliced_end = duration__.slice(-1);
                const between_int = '0';
                const sliced_start = duration__.slice(0, -1);
                const sliced_result = sliced_start+between_int+sliced_end;
                duration__ = sliced_result;
              } else false;

              return (
                <Grid item xs={12} sm={3} key={data.no}>
                  <Card className={stylesDataList.datalist_card}>
                    <CardActionArea href={gotolink} target='_blank'>
                      <Image src={data.thumbnail} width={462} height={260} />
                      <p className={`${stylesDataList.datalist_duration}`}>
                        {duration__}
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
              variant="outlined"
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