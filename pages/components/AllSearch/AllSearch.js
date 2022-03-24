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