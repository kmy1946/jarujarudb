import Head from 'next/head';
import { Button, Grid, TextField, Pagination as MuiPagination, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

import styles from '../styles/Home.module.css';
import stylesDataList from '../styles/Datalist.module.css';
import stylesSearch from '../styles/AllSearch.module.css';

import Layout from './components/layout';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Loading2 from './components/UIkits/Loading2';

export default function Search() {
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [netanotaneList, setNetanotaneList] = useState([]);//取得した本のリスト

  const [searchKeyword, setSearchKeyword] = useState("ジャルジャル");
  const [searchKeywordList, setSearchKeywordList] = useState(['ジャルジャル','ネタのタネ']);//複数ワードの場合

  const inputSearchKeyword = useCallback((event) => {
    setSearchKeywordList(event.target.value);
    setPage(1)//valueが変更された時、pageも変更
  }, [setSearchKeywordList]);

  const clickPage = (e, page) => {
    setPage(page);
    setNetanotaneListAPI(page, searchKeywordList);
  };
  
  const clickSearchButton = (e) => {
    //AddComma();
    if (typeof(searchKeywordList) == 'string') {
      const spaceData = searchKeywordList
      const resultspace = spaceData.replace(/　| /g, ',')// 全ての全角|半角スペースを,にする

      setSearchKeywordList(resultspace)
      setNetanotaneListAPI(page, resultspace);
    } else {
      console.log('Not String');
      return false
    }
  }

  //取得データのセットと総データ件数をセットする
  const setNetanotaneListAPI = async(page, searchKeywordList) => {
    console.log('第２引数',searchKeywordList)
    console.log('page:',page)
    const response = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/search?page=${page}&searchkeywordlist=${searchKeywordList}`);
    //const response = await fetch(`http://localhost:3000/api/moviesdb/search1?page=${page}&searchkeywordlist=${searchKeywordList}`);
    const data = await response.json();


    setNetanotaneList(data.rows);//.rows);//取得データ
    setCount(data.count);//総データ件数
  }

  const Pagination = withStyles({
    root: {
      display: 'inline-block',//中央寄せのためインラインブロックに変更
    },
  }) (MuiPagination);

  /*
  const DeleteComma = () => {
    if (typeof(searchKeywordList) == 'object') {
      const before = searchKeywordList
      const after = before.join()
      
      const result = after.replace(',', '　')
      setSearchKeywordList(result)
    } else false
  }
  
  useEffect(async() => {
    DeleteComma();
  }, [searchKeywordList])
  */

  useEffect(async() => {
    setNetanotaneListAPI(page, searchKeywordList);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>ジャルジャルDB キーワード検索</title>
        <meta name="description" content="Generated by a fan of Jarujaru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
          <Layout header='ジャルジャルDB'>
              <div className={stylesSearch.all_search_textfield_group}>
                <TextField
                    fullWidth={false} label={"キーワード検索"}
                    multiline={false}
                    size="small"
                    onChange={inputSearchKeyword}
                    value={searchKeywordList}
                    required={false} rows={1} 
                    type={"text"}
                    className={stylesSearch.all_search_textfield}
                  />
              </div>
              <div className={stylesSearch.all_search_search_button}>
                <Button
                  onClick={clickSearchButton}
                  className={stylesSearch.all_search_search_button_button}
                >
                  検索
                  <SearchIcon />
                </Button>
              </div>

            <div className={styles.all_search__searchkeywordlist_group}>
              <p className={stylesSearch.all_search__searchkeywordlist}>
                　{searchKeywordList}　の結果一覧：
              </p>
            </div>
          <Grid container direction="column">
          <Grid container className={styles.datalist}>
                  
          {netanotaneList.length > 0 ? (
            netanotaneList.map((data) => {
              // title, views, created_at, から{}を取り除く
              const title_ = data.title.replace(/{|}|"/g, '');
              const views_ = data.views.replace(/{|}|"/g, '');
              const created_at_ = data.created_at.replace(/{|}|"/g, '');

              const beforestr = data.url
              const regex = /(?<=v=)(.*)/
              const result = beforestr.match(regex);
              const urlv = result[0]
              
              let gotolink = 'https://www.youtube.com/watch?v='+urlv;
              const viewstext = ' 回視聴';

              // duration
              const duraiton_ = data.duration.replace('.','分');
              let duration__ = duraiton_.replace(':','時間');
              const rege1 = /d*分d*/;
              const rege2 = /d*時間d*/;
              if (rege1.test(duration__)) {
                duration__ = `${duration__}秒`;
                if (rege2.test(duration__)) {//時間の場合
                  duration__ = duration__.replace('秒','')
                } else false
              } else false

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
                        {title_}
                       </p>
                      <p>
                        {data.detail}
                      </p>
                      <p className={stylesDataList.datalist_created_at}>
                        {created_at_}
                      </p>
                      <p className={stylesDataList.datalist_views}>
                        {views_}{viewstext}
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

      </main>
    </div>
  )
}