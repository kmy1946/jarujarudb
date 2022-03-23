import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './Datalist.module.css';

export default function DataList(props){
  

  return (
      <Grid container direction="column">
        <Grid container className={styles.datalist}>

        {() => {
          if (props.datas) {
            return (
              <di>
                true
              </di>
            )
          } else {
            <div>
              NOddata
            </div>
          }
        }}

        </Grid>
      </Grid>
  )
}