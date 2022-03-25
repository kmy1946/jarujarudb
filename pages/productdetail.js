//import MuiPagination from '@mui/lab/Pagination';
import { Pagination as MuiPagination } from '@mui/material';
import { withStyles } from '@mui/styles';
import {useEffect, useState} from 'react'

export default function ProductDetail() {
  const [page, setPage] = useState(1);//ページ番号
  const [count, setCount] = useState();//総ページ数
  const [bookList, setBookList] = useState([]);//取得した本のリスト

  useEffect(async () => {
    setBookListAPI(page);
    console.log('page:\n',page)
  }, []);

  //ページ番号をクリックしたときの処理
  const clickPage = (e, page) => {
    setPage(page);
    setBookListAPI(page);
  }

  //取得データのセットと総データ件数をセットする
  const setBookListAPI = async(page) => {
    const response = await fetch('https://jarujarudb.vercel.app/api/moviesdb/productdetail');//deployment
    //const response = await fetch(`http://localhost:3000/api/moviesdb/productdetail?page=${page}`);
    const data = await response.json();

    console.log('data:\n',data)

    setBookList(data.rows);//.rows);//取得データ
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
        {bookList.length > 0 && (
          bookList.map(book => (
            <li>{book.title}</li>
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