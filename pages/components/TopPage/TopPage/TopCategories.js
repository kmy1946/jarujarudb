import styles from "./TopPage.module.css";
import datas from "./TopCategories.json";
export default function TopCategories() {
  return (
        <div className={styles.grid}>
          {datas.map(data=> {
            return (
              <a href={data.link} className={styles.card}>
                <h2>{data.title} &rarr;</h2>
                <p>{data.description}</p>
              </a>
            )
          })}
        </div>
  )
}