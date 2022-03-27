import { Button } from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./UIkits.module.css";

export default function ToSearchButton() {
  return (
    <div className={styles.tokeyword_group}>
      <Link
        href="/search"
      >
        <Button
          className={styles.tokeyword}
          variant="contained"
        >
          キーワード検索<SearchIcon/>
        </Button>
      </Link>
    </div>
  )
}