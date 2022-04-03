import Head from 'next/head';
import { Button, Card, CardActionArea, CardContent, Grid, Pagination as MuiPagination, LinearProgress } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import stylesDataList from '../styles/Datalist.module.css';
import Layout from './components/layout';
import Loading2 from './components/UIkits/Loading2';

export default function Home() {
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
    const tag='ジャルジャル';

    const response = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${page}&tag=${tag}`);
    //const response = await fetch(`http://localhost:3000/api/moviesdb/moviesdb?page=${page}&tag=${tag}`);
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
        <title>ジャルジャルDB</title>
        <meta name="description" content="Generated by a fan of Jarujaru Tower" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Layout header='ジャルジャルDB'>
          <Grid container direction="column">
        <Grid container className={styles.datalist}>
                
        {netanotaneList.length > 0 ? (
            netanotaneList.map((data) => {
              // title, views, created_at, から{}を取り除く
              const title_ = data.title.replace(/{|}|"/g, '');
              const views_ = data.views.replace(/{|}|,|"| /g, '');
              const created_at_ = data.created_at.replace(/{|}|"/g, '');

              // created_at
              var date1 = new Date();
              var date2 = new Date(created_at_)
              var termDay = (date1 - date2)/(86400000)//86400000;
              var views___ = views_.replace(/,/g,'')
              var diff = views___ / termDay
              //console.log(views___)
              //console.log(title_,diff)

              const beforestr = data.url;
              //const regex = /(?<=v=)(.*)/;
              const regex = /(?<=(www.youtube.com))(.*)/;
              const result = beforestr.match(regex);
              const urlv = result[0]
              let gotolink = 'https://www.youtube.com'+urlv;
              //console.log(gotolink)
              
              // views
              const viewstext = ' 回視聴 以上';

              // progress_views
              const views_cut = views_.replace(/,/g,'');
              let progress_v = ''

              const range = (start, end) => {
                const list = [];
                for (let i = start; i <= end; i++ ) {
                  list.push(i);
                }
                return list;
              }
              
              // duration
              let duration__ = data.duration.replace('.',':');
              const rege1 = /d*:$/;
              const rege2 = /:[0-9]$/;
              const rege3 = /d*:d*./;//時間
              const rege4 = /^[0-9]$/;//5
              const rege5 = /^[0-9][0-9]$/;//31
              if (rege1.test(duration__)) {// 3: ➝ 3
                  duration__ = `${duration__.slice(0, duration__.length -1)}`;
              } if (rege2.test(duration__)) {// 5:3 ➝ 5:03
                const sliced_end = duration__.slice(-1);
                const between_int = '0';
                const sliced_start = duration__.slice(0, -1);
                const sliced_result = sliced_start+between_int+sliced_end;
                duration__ = sliced_result;
              } if (rege4.test(duration__)) {// 5 ➝ 5:00
                duration__ = duration__+':00';
              } if (rege5.test(duration__)) {// 51 ➝ 51:00
                duration__ = duration__+':00';
              } if (rege3.test(data.duration)) {// 5:3 ➝ 5:03
                const replace_m = data.duration.replace('.','')
                const replace_h = replace_m.replace(':','時間')
                duration__ = replace_h+'分';
              } else false;

              const duration__t = duration__.replace(/時間/g,':');
              const duration__tt = duration__t.replace(/分/g,'');// 3:34

              const turning_ = data.turning;
              const rege_t = /[0-9]*:[0-9]*/;
              const rege_tyokonto = /超コント/;
              let d_progress = ''
              if (rege_t.test(duration__)) {
                // duraion__の変換
                const d_start = duration__tt.slice(':')[0];
                const d_end = duration__tt.slice(-2);
                const d_m = d_start*60;
                const d_total = Number(d_m) + Number(d_end)
                //turningの変換
                if (data.turning){
                  const t_start = data.turning.slice(':')[0]
                  const t_end = data.turning.slice(-2);
                  
                  const t_m = t_start*60;
                  const t_total = Number(t_m) + Number(t_end)
                  d_progress = (t_total/d_total)*100
                } else {
                  d_progress = 0
                }
                
              } if (rege_tyokonto.test(data.title)) {
                duration__ = null
              }

              return (
                <Grid item xs={12} sm={3} key={data.no}>
                  <Card className={stylesDataList.datalist_card}>
                    <CardActionArea href={gotolink} target='_blank'>
                      <Image src={data.thumbnail} width={462} height={260} />
                      <div className={stylesDataList.datalist_progress}>
                        <LinearProgress variant="determinate" value={d_progress} className={stylesDataList.datalist_progress_}/>
                        <p className={stylesDataList.datalist_progress_text}>{data.turning}</p>
                      </div>
                      <p className={`${stylesDataList.datalist_duration}`}>
                        {duration__}
                      </p>
                      <p className={`${stylesDataList.datalist_duration}`}>
                        {duration__}
                      </p>
                      <CardContent className={stylesDataList.datalist_cardcontent}>

                      <p className={stylesDataList.datalist_title}>
                        {title_}
                      </p>
                      <p>
                        {data.detail}
                      </p>
                      <p className={stylesDataList.datalist_created_at}>
                        {created_at_}
                      </p>
                      {/*
                      <p className={stylesDataList.datalist_views}>
                        {views_}{viewstext}
                      </p>
                      */}
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