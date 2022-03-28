import ErrorIcon from '@mui/icons-material/Error';
import Layout from './components/layout';
import styles from '../styles/custom.module.css';

export default function NotFound() {
  return (
    <div>
      <Layout>
        <br/>
        <p className={styles.notfound__text}>
          <ErrorIcon/>
          現在のURLにページはありません。
        </p>
        <br/>
        <p className={styles.notfound__link}>
          トップページへ
        </p>
      </Layout>
    </div>
  )
}