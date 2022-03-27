import { Container, Grid, Typography } from "@mui/material";
import styles from "../../../../styles/Footer.module.css";
import FooterArchive from "./FooterArchive";
import FooterCategory from "./FooterCategory";

export default function Footer() {
  return (
    <div className={styles.footer_group}>
      <div className={styles.footer__description_box}>
        <p className={styles.footer__description_text}>
          ジャルジャルタワーを分類しています...
        </p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FooterArchive/>
        </Grid>
        <Grid item xs={6}>
          <FooterCategory/>
        </Grid>
      </Grid>
      <Container> 
        <Typography>
        </Typography>
            <Typography className={styles.footer__title}>
              {"Copyright © "}
                ジャルジャルDB
              {" "}
              {new Date().getFullYear()}
              {"."}
        </Typography>
      </Container>
    </div>
  )
}