import { Grid } from "@mui/material";
import { useState } from "react";
import styles from "./Footer.module.css";

export default function FooterCategory () {
  const selectMenu = (event, path) => {
    window.location.href(path);//pathはvalueで指定
  };
  const [filters, setFilters] = useState([
    {func: selectMenu, label: "2022.1", id: "2022_1_month", value: "/?created_at_month=202201"},
    {func: selectMenu, label: "2022.2", id: "2022_2_month", value: "/?created_at_month=202202"},
    {func: selectMenu, label: "2022.3", id: "2022_3_month", value: "/?created_at_month=202203"},
  ]);

  return (
    <>
    <Grid container>
        <Grid item xs={12}>
          <div className={styles.menu}>
            <label htmlFor={styles.Panel1_arc}>カテゴリー</label>
            <input type='checkbox' id={styles.Panel1_arc} className={styles.on_off} />
            <ul>
              {filters.map(filter => (
                <li key={filter.id} onClick={(e) => filter.func(e, filter.value)}>
                    {filter.label}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  )
}