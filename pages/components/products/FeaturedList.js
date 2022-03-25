import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from './Datalist.module.css';

export default function FeaturedList(props){
  const [datas, setDatas] = useState([]);

  useEffect( () => {
    //console.log(props.data.movies.rows);
    const list = []
    list.push(props.data);
    setDatas(...list);
    //console.log(list)
  },[]);//props.datas

  //console.log(props.netanotanes)

  return (
      
                  <Card className={styles.datalist_card}>
                    <CardActionArea href={props.gotolink} target='_blank'>
                      <CardMedia style={{ height: "170px" }} image={props.thumbnail} />
                      <CardContent style={{ height:"170px" }}>
                      <Typography variant="body2" component="p" className={styles.datalist_title}>
                        {props.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {props.detail}
                      </Typography>
                      <Typography variant='body2' component="p" className={styles.datalist_created_at}>
                        {props.created_at}
                      </Typography>
                      <Typography variant='body2' component="p" className={styles.datalist_views}>
                        {props.views}{props.viewstext}
                      </Typography>
                      </CardContent>
                    
                      <CardActions>
                        <Button size="small" className={styles.datalist_gotolink}>動画をみる</Button>
                      </CardActions>
                    </CardActionArea>
                  </Card>

  )
}