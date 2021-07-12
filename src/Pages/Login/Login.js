import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from './../../img/logo.png'
import './Login.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Paper from "@material-ui/core/Paper";
import { Auth } from 'aws-amplify';

import {
    Link,
} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

    export default function Login(props) {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [selectLoginAs, setSelectLoginAs] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [messageCatogary, setMessageCatory] = React.useState("");
    const handleEmail = (event) => {
    setEmail(event.target.value)
    }
    const signIn = async()=> {
     
            props.history.push('/Home')
       
    }
    const handlePassword = (event) => {
    setPassword(event.target.value)
    }
    const handleChange = (event) => {
    setSelectLoginAs(event.target.value);
    };

    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setOpen(false);
    };
   

    console.log(selectLoginAs)
    return (
        <div className="main">
        {/* ===========================> <=========================== */}
        <div className="login_main center">
        <img src={Logo} className="loginPage_Logo" alt="Logo" />
        {/* ===========================> <=========================== */}
        <p className="login_heading">SIGN IN</p>
        {/* ===========================> <=========================== */}
         <TextField
                    id="outlined-textarea"
                    label="Email Address"
                    placeholder="Email Address"
                    variant="outlined"
                    fullWidth
                    type="email"
                    autoComplete="email-address"
                    className="login_email_input"
                    value={email}
                    onChange={handleEmail}
                />
                <br />
                <br />

                {/* ===========================> <=========================== */}
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    autoComplete="current-password"
                    className="login_pasword_input"
                    value={password}
                    onChange={handlePassword}
                />
                <br />
                <br />

                {/* ===========================> <=========================== */}
 <Button variant="outlined" color="primary" fullWidth className="sing_btn_text" onClick={() => signIn()}>
                        Sign In
                </Button>
                
                <Link  to="/Signup">
                <div>SignUp</div>
                </Link>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={messageCatogary}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
