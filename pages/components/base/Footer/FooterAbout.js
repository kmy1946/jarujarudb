import { Container, Grid, Typography } from "@mui/material";
import styles from "../../../../styles/Footer.module.css";
import FooterArchive from "./FooterArchive";
import FooterCategory from "./FooterCategory";

export default function FooterAbout() {
  return (
    <div className={styles.footer_about__group}>
      <br/>
        <p className={styles.footer__about_text}>
          ジャルジャルDBの仕様
        </p>
      <table className={styles.footer_about__table}>
        <tbody>
        <tr>
          <th className={styles.footer_about__row}>項目</th>
          <th className={styles.footer_about__column}>ジャルジャルDBの場合</th>
          <th className={styles.footer_about__column}>YouTubeの場合</th>
        </tr>
        <tr>
          <td className={styles.footer__about_row_title}>表示方法</td>
          <td>ページネーション</td>
          <td>無限スクロール</td>
        </tr>
        <tr>
          <td className={styles.footer__about_row_title}>検索機能</td>
          <td>キーワードLIKE検索</td>
          <td>関連性による検索</td>
        </tr>
        </tbody>
      </table>
      <br/><br/><br/><br/>
    </div>
  )
}