import ErrorIcon from '@mui/icons-material/Error';
import Layout from './components/layout';
import styles from '../styles/custom.module.css';
import Link from 'next/link';

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
        <Link href='/'>
          <p className={styles.servererror__link}>
            トップページへ
          </p>
        </Link>
        
      </Layout>
    </div>
  )
}