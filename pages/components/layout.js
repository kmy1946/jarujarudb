import Head from "next/head";
import styles from '../../styles/layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./Categories/Categories";
import Footer from "./base/Footer/Footer";
import TopCategories from "./TopPage/TopPage/TopCategories";
import Profile from "./base/Profile/Profile";

export default function Layout(props) {
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Heading/>
      <Header header={props.header} />
        <Profile/>
        <Categories/>
        <TopPageTitle/>
        {props.children}
    </div>
    <TopCategories/>
    <Footer/>
    </div>
  )
}