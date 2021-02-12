import React from 'react';
import './MovieList.css';
import movie_default from '../../media/images/movie_default.jpg'
// import {Link} from 'react-router-dom';

// MATERIAL UI CARD 
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
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
                        <div key={movie.imdbID} className="Card-div">
                        <Card key={movie.imdbID} className={classes.root} >
                            
                        <CardActionArea onClick = {()=>props.getAllDetails(movie.imdbID)}>
                          <CardMedia
                            component="img"
                            alt={movie.Title}
                            height="300"
                            image={movie.Poster}
                            title={movie.Title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="h2" >
                              <span style={{ width: "200" , whiteSpace: "nowrap", overflow:"hidden", textOverflow : "ellipsis"}} >{movie.Title}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                             <span className="details" >{movie.Type} , {movie.Year}     
                             <ArrowForwardIcon color="primary" ></ArrowForwardIcon>
                             </span>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions> */}
                      </Card>
                      </div>
                    )
                    })}
            </div>
        )
    }
    else return null

}

export default MovieList;