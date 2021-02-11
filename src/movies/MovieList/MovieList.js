import React from 'react';
import './MovieList.css';
import movie_default from '../../media/images/movie_default.jpg'
import {Link} from 'react-router-dom';

// MATERIAL UI CARD 
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: "90%",
      margin:'100'
    },
  });  

const MovieList = (props) =>{
    const classes = useStyles();
    if(props.movieList){
        return (
            <div className="All-Movies-list" >
                {/* <p>Back</p> */}
                {props.movieList.map((movie) => {
                    if((movie.Poster === "N/A" || movie.Poster === null)){
                        movie.Poster = movie_default;
                    }
                    return(
                        <Card key={movie.imdbID} className={classes.root} >
                        <CardActionArea onClick = {()=>props.getAllDetails()}>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={movie.Poster}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {movie.Title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                             {movie.Type} , {movie.Year}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    )
                    })}
            </div>
        )
    }
    else return <div><h1>Search for Movie</h1></div>

}

export default MovieList;