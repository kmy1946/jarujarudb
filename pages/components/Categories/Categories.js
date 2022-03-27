import styles from "./Categories.module.css";
import categories from "./Categories.json";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Categories() {
  return (
      <div className={styles.categories_scroll_nav}>
        <div className={styles.categories_tag}>
          <p>
            タグ検索
          </p>
        </div>
        <br/>
        <ul className={styles.categories_ul}>
          {
            categories.map(cat => {
              return (
                <li key={cat.id} className={styles.categories_list}>
                  <Link href={cat.link}>
                    <Button
                      variant="contained"
                      className={styles.categories_list_button}
                    >
                      {cat.title}
                    </Button>
                      
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <br/><br/>
        <br/><br/>
      </div>
  )
}