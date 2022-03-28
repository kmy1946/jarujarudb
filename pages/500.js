import ErrorIcon from '@mui/icons-material/Error';
import Layout from './components/layout';
import styles from '../styles/custom.module.css';

export default function Custom500() {
  return (
    <div>
      <Layout>
        <br/>
        <p className={styles.servererror__text}>
          <ErrorIcon/>
          Sorry...
          <br/>
          Server Error Occurred.
        </p>
        <br/>
        <p className={styles.servererror__link}>
          トップページへ
        </p>
      </Layout>
    </div>
  )
}