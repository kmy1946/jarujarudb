import styles from '../../../../styles/Header.module.css';
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";
import ToSearchButton from '../../UIkits/ToSearchButton';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';

export default function Heading() {
  const router = useRouter();
  const urlHidden = router.pathname.split('/')[1]
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
                <strong>
                </strong>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'50px'}}>
        {/*
        <div style={{marginTop:'0px',position:'fixed', right:0,zIndex:100}}>marginTop:'50px'
        */}
          {
            urlHidden=='search' ?
            <div style={{display:'none'}}>
              <ToSearchButton/>
            </div>
            :
            <ToSearchButton/>
          }
          
        </div>
    </div>
  )
}