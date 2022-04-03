import Head from "next/head";
import styles from '../../styles/layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./Categories/Categories";
import Footer from "./base/Footer/Footer";
import TopCategories from "./TopPage/TopPage/TopCategories";
import Profile from "./base/Profile/Profile";
import Adv1 from "./Adv/Adv1";
import Adv2 from "./Adv/Adv2";

export default function Layout(props) {
  return (
    <div>
      
      <div className={styles.container}>
        <Head>
          <title>{props.title}</title>
        </Head>
        <Heading/>
        <Header header={props.header} />
        {/*
        <Adv1/>
        */}
        <Categories/>
        {props.children}
        {/*
        <Adv2/>
        */}
      </div>
      <TopCategories/>
      <Footer/>
    </div>
  )
}