import { Button, Divider, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import styles from "./AllSearch.module.css";
import { useCallback, useState } from 'react';

export default function AllSearch() {
  const [searchKeyword, setSearchKeyword] = useState("")

  const inputSearchKeyword = useCallback((event) => {
        setSearchKeyword(event.target.value)
  }, [setSearchKeyword])



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
    const response = await fetch(`http://localhost:3000/api/moviesdb/allsearch?page=${page}&keyword=${searchKeyword}`)
    const data = await response.json();

    setNetanotaneList(data.rows);//.rows);//取得データ
    setCount(data.count);//総データ件数
  }




  return (
    <div className={styles.all_search_searchField}>
      <div className={styles.all_search_tag}>
          <p>
            フリーワード検索
          </p>
      </div>
      <div>
          <TextField
            fullWidth={false} label={"キーワード検索"}
            multiline={false}
            size="small"
            onChange={inputSearchKeyword}
            value={searchKeyword}
            required={false} rows={1} 
            type={"text"}
            className={styles.all_search_textfield}
          />
          <IconButton>    
        </IconButton>
      </div>
      <br/>
      <div className={styles.all_search_search_button}>
        <Button className={styles.all_search_search_button_button}>
          検索
          <SearchIcon />
        </Button>
      </div>
      <Divider/>
    </div>
  )
}