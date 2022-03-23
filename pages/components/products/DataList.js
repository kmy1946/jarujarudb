import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
//import { query_all } from "../../../Postgresql/psql";
//import firebase from '../../../Firebase/index';
import styles from './Datalist.module.css';
//import handler from "../../api/movies";

export default function DataList(props){
  const [title, setTitle] = useState([]);
  const [loader, setLoader] = useState(true);

  return (
      <Grid container direction="column">
        <Grid container className={styles.datalist}>
          {props.datas.map(data => {
          

          const beforestr = data.url
          const regex = /(?<=v=)(.*)/
          const result = beforestr.match(regex);
          const urlv = result[0]
          
          let gotolink = 'https://www.youtube.com/watch?v='+urlv
          const viewstext = ' 回視聴'
          return(
            <Grid item xs={12} sm={3} key={data.id}>
              <Card className={styles.datalist_card}>
                <CardMedia style={{ height: "170px" }} image={data.thumbnail} />
                <CardContent>
                <Typography variant="body2" component="p" className={styles.datalist_title}>
                  {data.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {data.detail}
                </Typography>
                
                <Typography variant='body2' component="p" className={styles.datalist_created_at}>
                  {data.created_at}
                </Typography>
                <Typography variant='body2' component="p" className={styles.datalist_views}>
                  {data.views}{viewstext}
                </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={gotolink} target='_blank' className={styles.datalist_gotolink}>動画をみる</Button>
                </CardActions>
              </Card>
            </Grid>
          )
          }
          )
          }
        </Grid>
      </Grid>
  )
}