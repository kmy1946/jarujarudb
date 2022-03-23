import styles from "./TopPage.module.css";
export default function TopCategories() {
  return (
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>このサイトについて &rarr;</h2>
            <p>2000本以上あるジャルジャルタワーの動画を分類しています。</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>作成者について &rarr;</h2>
            <p></p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>ネタのタネだけ表示 &rarr;</h2>
            <p>ネタのタネの動画だけを表示します。</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>○○ &rarr;</h2>
            <p>
              ○○
            </p>
          </a>
        </div>
  )
}