import Head from "next/head";
import styles from './layout.module.css';
import Header from "./base/header";
import Heading from "./base/Heading/Heading";
import TopPageTitle from "./TopPage/TopPageTitle.js/TopPageTitle";
import Categories from "./Categories/Categories";
import AllSearch from "./AllSearch/AllSearch";
import SortDesc from "./Sorts/Sorts";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Heading/>
      
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
        <Categories/>

        {/*
        <div>
            <TextField
              fullWidth={false} label={"キーワード検索"}
              multiline={false}
              size="small"
              onChange={inputSearchKeyword}
              value={searchKeyword}
              required={false} rows={1} 
              type={"text"}
              className={stylesSearch.all_search_textfield}
            />
            <IconButton>    
          </IconButton>
        </div>
        
        <br/>
        <div className={stylesSearch.all_search_search_button}>
          <Button
            onClick={clickSearchButton}
            className={stylesSearch.all_search_search_button_button}
          >
            検索
            <SearchIcon />
          </Button>
        </div>*/}
        {/*
        <SortDesc/>
        */}
        <TopPageTitle/>
        <br/>
        <br/>
        {props.children}
    </div>
  )
}