import Head from 'next/head';
import { Pagination as MuiPagination } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';


export default function Home({posts}) {
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [netanotaneList, setNetanotaneList] = useState([]);//取得した本のリスト

  useEffect(async () => {//初回レンダリング時のみ実行
    //setNetanotaneListAPI(page);
    
    setNetanotaneList(posts['rows']);//.rows);//取得データ
    setCount(posts.count);//総データ件数
  }, []);

  const clickPage = (e, page) => {
    setPage(page);
    //setNetanotaneListAPI(page);
  }

  /*
  //取得データのセットと総データ件数をセットする
  const setNetanotaneListAPI = async(page) => {
    const tag='ジャルジャル';

    const response = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${page}&tag=${tag}`);
    const data = await response.json();

    setNetanotaneList(data.rows);//.rows);//取得データ
    setCount(data.count);//総データ件数
  }
  */

  const Pagination = withStyles({
    root: {
      display: 'inline-block',//中央寄せのためインラインブロックに変更
    },
  }) (MuiPagination);


  return (
    <div>
      {netanotaneList.length > 0 && (
        netanotaneList.map((data) => {
          return (
            <p>
              {data.title}
            </p>
      )}))}
      <div style={{marginTop: "50px", textAlign: "center"}}>
        <Pagination
          count={count}//総ページ数
          color="primary"
          onChange={clickPage}
          page={page}
        />
      </div>
    </div>
  )
}

/*
// 動的なページを作成
export const getStaticPaths = async () => {
  const pages = 1;
  const tag='ジャルジャル';

  const res = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${pages}&tag=${tag}`)
  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  console.log('\n\nrange:',range)

  // 総数/表示数＝ページ数   /movies/page/ページ数 を生成
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/movies/page/${repo}`)

  return {
    paths,
    fallback: false
  };
};
*/

export const getStaticProps = async(context) => {
  const pages = 1;
  const tag='ジャルジャル';
  const data = await fetch(`https://jarujarudb.vercel.app/api/moviesdb/moviesdb?page=${pages}&tag=${tag}`)
    .then(res => res.json())
    .catch(() => null);
  //console.log('data:',data['rows'])

  return {
    props: {
      posts: data
      //totalCount: data.totalCount
    },
  };
};