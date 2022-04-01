import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "../../styles/about.module.css";
import Layout from "../components/layout";
export default function About() {
  return (
      <Layout>
        <br/>
        <br/>
        <br/>
        <div>
          <p className={styles.about_h1}>
            ジャルジャルデータベースについて
          </p>
        </div>
        <br/>
        <br/>
        <div className={styles.about__description}>
          <p className={styles.about__h2}>
            お問い合わせ
          </p>
          <p className={styles.about__text}>
            お問い合わせは下記Twitterアカウントに、リプもしくはDMにて宜しくお願い致します。
          </p>
          <a href='https://twitter.com/JarujaruDB_' rel="noreferrer" target='_blank'>
            <p className={styles.about__twitter}>
            <TwitterIcon/>@JarujaruDB_
          </p>
          </a>
          <br/><br/>
          <p className={styles.about__h2}>
            参考にさせて頂いたサイト
          </p>
          <p>
            <a href="https://hiroyukidb.net/" rel="noreferrer" target='_blank' className={styles.about_hiroyukilink}>
              ひろゆきデータベース
            </a>
          </p>
          <br/>
          <p className={styles.about__h2}>
            独自性
          </p>
          <p className={styles.about__text}>
            YouTubeでは関連性に基づいた検索が実行されますが、当サイトでは{new Date().getFullYear()}年現在単純な文字列検索を実行します。
          </p>
          <p className={styles.about__text}>
            無限スクロールによる読み込みに対して、<stropng>ページネーション</stropng>による一覧表示で過去の動画にさかのぼる際に予期せず起こる画面の再レンダリングを予防できます。
          </p>
          <br/>
          <br/>
          <p className={styles.about__h2}>
            レスポンシブ対応
          </p>
          <p className={styles.about__text}>
            グリッドやカードなど主要部には、material-uiを使用しています。
          </p>
          <br/>
          <br/>
          <p className={styles.about__h2}>
            メンテナンス
          </p>
          <p className={styles.about__text}>
            バグの修正や仕様変更などの際、メンテナンスを行う場合があります。
          </p>
          <br/>
          <br/>
          <p className={styles.about__h2}>
            今後について
          </p>
          <p className={styles.about__text}>
            動画データ及び検索機能の仕様、サイトデザイン、URLの変更・追加は随時更新していきます。
          </p>
          <p>
          </p>
        </div>
        <br/>
        <br/>
        <br/>
      </Layout>
  )
}