import "./LandingPage.css";
import {Route } from 'react-router-dom';
// import Movies from './movies/movies';
import {Link} from 'react-router-dom';
import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";



const LandingPage = () =>{

    const [signUpFormOpen, setSignUpFormOpen] = useState(false);

const openSignUpForm = ()  =>  {
    console.log("Sign up form opened");
    setSignUpFormOpen(true);
}

    return (
        <div className="Landing-cards">
            <div className="Sign-up-card" onClick={()=>{openSignUpForm()}} >
                <p className="header">Sign up</p>
                {/* <h5>Get features like</h5> */}
                <br></br><br></br>
                <div className="secondary-details">
                    <p>Access suggestions across devices</p>
                    <p>Receive suggestions</p>
                    <p>Suggest others</p>
                </div>
            </div>
            <Link style={{textDecoration:"none"}} to="/Movies">
            <div className="Continue-without-card">
                <p className="header">Continue <br></br> without sign-in</p>
                <br></br>
                {/* <h5 style={{textDecoration:"none", color :"black"}}>You still get</h5> */}
                <div className="secondary-details">
                    <p>Access to Search</p>
                    <p>Add item to personal watch list</p>
                    <p><strong>Sign-in later with saved watchlist</strong></p>
                </div>
            </div>
            </Link>
            {signUpFormOpen && 
            <SignUpForm
            open={signUpFormOpen}
            />}
        </div>
    )
}

export default LandingPage;