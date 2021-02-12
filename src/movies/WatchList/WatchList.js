import './WatchList.css';
// MATERIAL UI CARD
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import movie_default from "../../media/images/movie_default.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const WatchList = () => {
  const myWatchList = JSON.parse(localStorage.getItem("myWatchList"));
  console.log(myWatchList);
  const classes = useStyles();
 if(myWatchList){
  return (
    <div>
      <p className="WatchList-header" >WatchList</p>
      <div className="All-Movies-list">
        {/* <p>Back</p> */}
        {myWatchList.map((movie) => {
          if (movie.Poster === "N/A" || movie.Poster === null) {
            movie.Poster = movie_default;
          }
          return (
            <div key={movie.imdbID} className="Card-div">
              <Card key={movie.imdbID} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={movie.Title}
                    height="300"
                    image={movie.Poster}
                    title={movie.Title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      <span
                        style={{
                          width: "200",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {movie.Title}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <span className="details">
                        {movie.Type} , {movie.Year}
                        <ArrowForwardIcon color="primary"></ArrowForwardIcon>
                      </span>
                    </Typography>
                    <p>
                      imdb: <StarIcon color="secondary"></StarIcon>{" "}
                      {movie.imdbRating}
                    </p>
                    <p>Language : {movie.Language}</p>
                    <p>Genre : {movie.Genre}</p>
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
          );
                    
        })
        }
      </div>
    </div>
  )}
  else return <h4>No movies in your watch list</h4>;
};

export default WatchList;
