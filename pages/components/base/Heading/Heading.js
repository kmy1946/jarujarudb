import styles from './Header.module.css';
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";
import ToSearchButton from '../../UIkits/ToSearchButton';

export default function Heading() {
  return (
    <div className={styles.header_root}>
        <AppBar className={styles.header_menuBar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.header_left}>
              <Link href='/' className={styles.header_right_text}>
                <strong>ジャルジャルDB!</strong>
              </Link>
            </div>
            <div className={styles.header_right}>
              <Link href='/' className={styles.header_right_text}>
                <strong></strong>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'50px'}}>
          <ToSearchButton/>
        </div>
    </div>
  )
}