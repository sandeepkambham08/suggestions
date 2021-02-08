import React from 'react';
import {Route , Link} from 'react-router-dom';
import Movies from './movies/movies';

const Navigation =()=>{
    return(
        <div>
            <ul>
                <Route path="/" exact render = {()=><Movies/>}   />
                <Route path="/movies" render = {()=><Movies/>}   />
                <Route path="/places"  render ={()=> <h1>Places</h1>}   />
                <Route path="/restaurants"  render ={()=> <h1>Restaurants</h1>}   />
                <Route path="/others"  render ={()=> <h1>Other suggestions</h1>}   />
            </ul>
        </div>
    )
}

export default Navigation;