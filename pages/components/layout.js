import Head from "next/head";
import styles from './layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./Categories/Categories";
import AllSearch from "./AllSearch/AllSearch";
import SortDesc from "./Sorts/Sorts";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Heading/>
      <AllSearch/>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
        <Categories/>
        <SortDesc/>
        <TopPageTitle/>
        <br/>
        <br/>
        {props.children}
    </div>
  )
}