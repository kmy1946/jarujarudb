import Head from "next/head";
import styles from './layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./Categories/Categories";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Heading/>
      <Header header={props.header} />
        <Categories/>
        <TopPageTitle/>
        <br/>
        <br/>
        {props.children}
    </div>
  )
}