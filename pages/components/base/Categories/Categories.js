import styles from "./Categories.module.css";
import categories from "./Categories.json";

export default function Categories() {
  return (
      <div class={styles.categories_scroll_nav}>
        <div className={styles.categories_tag}>
            <p>
              タグ検索
            </p>
          </div>
        <ul className={styles.categories_ul}>
          {
            categories.map(cat => {
              return (
                <li className={styles.categories_list}>
                  <a href={cat.link} target="_blank" className={styles.categories_list_a}>
                    {cat.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
  )
}