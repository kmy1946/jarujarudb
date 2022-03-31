import styles from "./Profile.module.css";

export default function Profile() {
  return(
    <div className={styles.profile__group}>
      <div>
        <p className={styles.profile__text}>
          ジャルジャルタワーの動画を検索しよう!
        </p>
      </div>
    </div>
  )
}