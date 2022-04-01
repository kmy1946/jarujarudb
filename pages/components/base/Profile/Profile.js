import Image from "next/image";
import Link from "next/link";
import styles from "./Profile.module.css";

export default function Profile() {
  return(
    <div className={styles.prf__group}>
      <div className={styles.prf__card_container}>
        <div className={styles.prf__card_img}>
          <Link href="/">
            <img src="/static/jarujaruprf.png" alt="" 
              className={styles.prj__img}
            />
          </Link>
        </div>
        <Link href="/">
          <div className={styles.prf__card_text}>
            <p>ジャルジャル データベース</p>
            <p>ジャルジャルタワーの動画を検索できます!!</p>
          </div>
        </Link>
      </div>
      
    </div>
  )
}