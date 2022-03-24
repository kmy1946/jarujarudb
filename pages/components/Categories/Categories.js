import styles from "./Categories.module.css";
import categories from "./Categories.json";

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
                  <a href={cat.link} rel="noreferrer" target="_blank" className={styles.categories_list_a}>
                    {cat.title}
                  </a>
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