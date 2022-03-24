import styles from "./TopPage.module.css";
import datas from "./TopCategories.json";
import Link from "next/link";
export default function TopCategories() {
  return (
        <div className={styles.topcategories__grid}>
          {
            datas.map(data=> {
              return (
                <div className={styles.topcategories__card}>
                  <strong className={styles.topcategories__strong}>
                    {data.title} &rarr;
                  </strong>
                  <Link href={data.link} key={data.id} className={styles.topcategories__link}>
                    <p>
                      {data.description}
                    </p>
                  </Link>
                </div>
              )
            })
          }
        </div>
  )
}