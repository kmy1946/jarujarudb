import Head from "next/head";
import styles from './layout.module.css';
import Header from "./base/header";
import Footer from "./base/Footer/Footer";
import Heading from "./base/Heading/Heading";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Heading/>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
      <>
        <br/>
        <br/>
        <br/>
        <h3>
          {props.title}
        </h3>
        {props.children}
      </>
      <Footer footer='copyright DETECTOR.'></Footer>
    </div>
  )
}