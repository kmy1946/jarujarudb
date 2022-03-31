import Image from "next/image";
import styles from "./Profile.module.css";

export default function Profile() {
  return(
    <div className={styles.prf__group}>
      <div className={styles.prf__card_container}>
        <div className={styles.prf__card_img}>
          <a href="#">
            <img src="/static/jarujaruprf.png" alt="" 
              className={styles.prj__img}
            />
          </a>
        </div>
        <div className={styles.prf__card_text}>
          <p>ジャルジャルDB</p>
          <p>ジャルジャルタワーの動画を検索できます!!</p>
        </div>
      </div>
    </div>
  )
}