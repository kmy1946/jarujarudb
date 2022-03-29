import { CircularProgress } from '@mui/material';
import styles from "../../../styles/UIkits.module.css";

export default function Loading2() {
  return (
    <div className={styles.uikits_circularProgress2}>
      <CircularProgress />
      <strong className={styles.uikits_circularProgress__text2}>　Loading</strong>
    </div>
  )
}