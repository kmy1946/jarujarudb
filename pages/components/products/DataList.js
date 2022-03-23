import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from './Datalist.module.css';

export default function DataList(props){
  const [datas, setDatas] = useState([]);
  useEffect( () => {
    //console.log(props.data.movies.rows);
    const list = []
    list.push(props.data.movies.rows);
    setDatas(...list);
    console.log(list)
  },[props.datas]);

  return (
      <Grid container direction="column">
        <Grid container className={styles.datalist}>
          {console.log(datas)}

          {datas.length > 0 && (
            datas.map(data => {
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
          )}
      

        </Grid>
      </Grid>
  )
}