import Head from "next/head";
import styles from './layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./base/Categories/Categories";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Heading/>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
        <Categories/>
        <TopPageTitle/>
        {props.children}
    </div>
  )
}