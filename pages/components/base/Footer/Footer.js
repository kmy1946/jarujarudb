import { Container, Grid, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "../../../../styles/Footer.module.css";
import FooterAbout from "./FooterAbout";
import FooterArchive from "./FooterArchive";
import FooterCategory from "./FooterCategory";

export default function Footer() {
  return (
    <div className={styles.footer_group}>
      <br/>
      <div className={styles.footer__description_box}>
        <p className={styles.footer__description_text}>
          ジャルジャルタワーの動画を検索できます...
        </p>
      </div>
      {/*
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FooterArchive/>
        </Grid>
        <Grid item xs={6}>
          <FooterCategory/>
        </Grid>
      </Grid>
      <br/><br/>
      */}
      <FooterAbout/>
      <Container> 
        <Typography>
        </Typography>
            <Typography className={styles.footer__title}>
              {"Copyright © "}
                ジャルジャルデータベース
              {" "}
              {new Date().getFullYear()}
              {"."}
        </Typography>
        
          <p className={styles.footer__twitter}>
            <a href="https://twitter.com/JarujaruDB_" target='_blank' className={styles.footer__twitter_link}>
            <TwitterIcon/>@JarujaruDB_
            </a>
          </p>
        
        
      </Container>
    </div>
  )
}