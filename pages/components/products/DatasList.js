import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from '../../../styles/Datalist.module.css';

export default function DatasList(props){
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