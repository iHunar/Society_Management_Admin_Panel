import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "./../../img/logo.png";
import "./Login.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import { Firebase } from "./../../config/firebase/firebase";
import Spanner from "./../../Components/spinner/spinner";
import { Link } from "react-router-dom";
const database = Firebase.database().ref("/");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
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
  const [selectLoginAs, setSelectLoginAs] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageCatogary, setMessageCatory] = React.useState("");
  const [isLoader, setisLoader] = React.useState(false);
  const [alrt, setalrt] = React.useState("");

  const [inputValues, setInputValues] = React.useState({
    email: "",
    password: "",
    userAs: "",
  });

  const handle_change = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   const  checkData=()=>{
  //     database.child("Admins").orderByChild("email").equalTo("admin@propertymanangr.com").once("value",(res) => {
  //       if (res.exists()){
  //         const userData = res.val();
  //         console.log("exists!", userData);
  //       }
  //       else{
  //         console.log("ghfhgfhgf!");
  //       }
  //   });
  //   }
  //   checkData()
  // })

  // const signIn = async () => {
  //   if (inputValues.email === "") {
  //     setalrt("Please Enter Email");
  //   } else if (inputValues.email === "admin@boardmember.com") {
  //     setisLoader(true);
  //     Firebase.auth()
  //       .signInWithEmailAndPassword(inputValues.email, inputValues.password)
  //       .then((userCredential) => {
  //         var user = userCredential.user;
  //         console.log("========>>>========", user.uid);
  //         setisLoader(false);
  //         setInputValues({
  //           email: "",
  //           password: "",
  //         });
  //         console.log("signin secess");
  //         props.history.push("/Home");
  //       })
  //       .catch((error) => {
  //         var errorMessage = error.message;
  //         console.log(errorMessage)
  //         if (
  //           errorMessage ===
  //           "The password is invalid or the user does not have a password."
  //         ) {
  //           setisLoader(false);
  //           setalrt("Please Enter Password");
  //         } else if (
  //           errorMessage === "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
  //         ) {
  //           setalrt(
  //             "Access to this account has been temporarily disabled due to many failed login attempts"
  //           );
  //           setisLoader(false);
  //         }

  //       });
  //   } else if (inputValues.email === "admin@propertymananger.com") {
  //     setisLoader(true);
  //     Firebase.auth()
  //       .signInWithEmailAndPassword(inputValues.email, inputValues.password)
  //       .then((userCredential) => {
  //         var user = userCredential.user;
  //         console.log("========>>>========", user.uid);
  //         setisLoader(false);
  //         setInputValues({
  //           email: "",
  //           password: "",
  //         });
  //         console.log("signin secess");
  //         props.history.push("/Home");
  //       })
  //       .catch((error) => {
  //         var errorMessage = error.message;
  //         if (
  //           errorMessage ===
  //           "The password is invalid or the user does not have a password."
  //         ) {
  //           setisLoader(false);
  //           setalrt("Please Enter Password");
  //         } else if (
  //           errorMessage === "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
  //         ) {
  //           setalrt(
  //             "Access to this account has been temporarily disabled due to many failed login attempts"
  //           );
  //           setisLoader(false);
  //         }
  //         console.log(errorMessage)
  //       });
  //   }
  //   else{
  //     setalrt('Email or Password is wrong')
  //   }
  // };

  // BETA

  const signIn = async () => {
    if (inputValues.email === "") {
      setMessage("Please Enter Email");
      handleClick();
    } else if (inputValues.password === "") {
      setMessage("Please Enter Password");
      handleClick();
    } else {
      setisLoader(true);
      database
        .child("Admins")
        .orderByChild("email")
        .equalTo(inputValues.email)
        .once("child_added", (res) => {
          if (res.exists()) {
            console.log(res.val());
            let userData = res.val();
            localStorage.setItem("userData", JSON.stringify(userData));
            if (userData.userPass !== inputValues.password) {
              setisLoader(false);
              setMessage("password is worng");
              handleClick();
            } else {
              props.history.push("/Home");
            }
          }
        });
    }
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
    return;
    }
    setOpen(false);
  };

  console.log(inputValues.email);
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
          value={inputValues.email}
          onChange={handle_change}
          name="email"
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
          value={inputValues.password}
          onChange={handle_change}
          name="password"
        />
        <br />
        <br />

        <br />
        {/* ===========================> <=========================== */}
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className="sing_btn_text"
          onClick={() => signIn()}
        >
          {isLoader === false ? <span>Sign In</span> : <Spanner />}
        </Button>
        <div style={{ color: "red" }}>{alrt}</div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
