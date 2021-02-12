import "./LandingPage.css";
import {Route } from 'react-router-dom';
// import Movies from './movies/movies';
import {Link} from 'react-router-dom';

const LandingPage = () =>{
    return (
        <div className="Landing-cards">
            <div className="Sign-up-card">
                <p className="header">Sign UP</p>
                <h5>Get features like</h5>
                <div className="secondary-details">
                    <p>Access suggestions across devices</p>
                    <p>Receive suggestions</p>
                    <p>Suggest others</p>
                </div>
            </div>
            <Link style={{textDecoration:"none"}} to="/Movies">
            <div className="Continue-without-card">
                <p className="header">Continue <br></br> without sign-in</p>
                <h5 style={{textDecoration:"none", color :"black"}}>You still get</h5>
                <div className="secondary-details">
                    <p>Access to Search</p>
                    <p>Add item to personal watch list</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default LandingPage;