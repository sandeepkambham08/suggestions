import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import './SignUpForm.css'

// FIREBASE // 
import firebase from "firebase/app";

import "firebase/auth";
import { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDvsyfyDoaQAVGlFmcywg0ZWe7F1mGNuqM",
  authDomain: "my-watchlist-59904.firebaseapp.com",
  projectId: "my-watchlist-59904",
  storageBucket: "my-watchlist-59904.appspot.com",
  messagingSenderId: "1002946129845",
  appId: "1:1002946129845:web:62c119bb9e73a7953f33fc",
  measurementId: "G-ZV0SDRZH29",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
// firebase.database();
// FIREBASE // 

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const FormDialog = (props) =>{
  const [open, setOpen] = React.useState(false);
  const [error , setError]  = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = () =>{
    const email = document.getElementById('sign-in-form-email').value;
    const password = document.getElementById('sign-in-form-password').value;
    console.log(document.getElementById('sign-in-form-email').value);
    // console.log(document.getElementById('Sign-in-password').value)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential.user , user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        let showError = errorCode.replace("auth/", "" );
        showError = showError.replace("-" , " ")
        const errorMessage = error.message;

        setError(showError)
        console.log(showError);
        console.log(error.message);
        // ..
      });
  }

  return (
    <div>
      <Dialog open={props.open} TransitionComponent={Transition} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Sign Up */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="sign-in-form-email"
            label="Email Address"
            type="email"
            fullWidth
          />
          {/* <input type="text" placeholder="Email" id="sign-in-form-email" />
          <input type="password" placeholder="password" id="sign-in-form-password" /> */}
          <TextField
            margin="dense"
            id="sign-in-form-password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <p className="Error-message">{error}</p>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleSignUp()} color="primary">
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;