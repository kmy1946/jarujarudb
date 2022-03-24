import { CircularProgress } from '@mui/material';
import styles from "./UIkits.module.css";

export default function Loading() {
  return (
    <div className={styles.uikits_circularProgress}>
      <CircularProgress />
      <strong className={styles.uikits_circularProgress__text}>　Loading</strong>
    </div>
  )
}