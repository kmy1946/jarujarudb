import styles from "./Sorts.module.css";
import datas from "./Sorts.json";

export default function SortDesc() {
  return (
      <div>
        <ul className={styles.sorts_ul}>
          {
            datas.map(data => {
              return (
                <li className={styles.sorts_list} key={data.id}>
                  <a href={data.link} rel="noreferrer" target="_blank" className={styles.sorts_list_a}>
                    {data.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <br/>
      </div>
  )
}