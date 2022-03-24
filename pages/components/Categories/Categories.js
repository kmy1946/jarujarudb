import styles from "./Categories.module.css";
import categories from "./Categories.json";
import Link from "next/link";

export default function Categories() {
  return (
      <div className={styles.categories_scroll_nav}>
        <br/>
        <div className={styles.categories_tag}>
          <p>
            タグ検索
          </p>
        </div>
        <ul className={styles.categories_ul}>
          {
            categories.map(cat => {
              return (
                <li className={styles.categories_list} key={cat.id}>
                  <Link href={cat.link}>
                    <p className={styles.categories_list_a}>
                      {cat.title}
                    </p>
                      
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