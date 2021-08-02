import React, { useEffect } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./AmenityBooking.css";
import Button from "@material-ui/core/Button";
import { FaAddressCard } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import upload_profile from "./../../img/upload_profile.png";
import { HiCamera } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import { Firebase } from "./../../config/firebase/firebase";
import Alert from "@material-ui/lab/Alert";
const database = Firebase.database().ref("/");
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typography: {
    padding: theme.spacing(2),
  },
  input: {
    display: "none",
  },
}));
function AmenityBooking(props) {
  const classes = useStyles();
  const [inputValues, setinputValues] = React.useState({
    email: "",
    name: "",
    number: "",
    cnic: "",
    image: upload_profile,
  });
  const [profilePic, setprofilePic] = React.useState(upload_profile);
  const [message, setMessage] = React.useState("");
  const [isLoader, setisLoader] = React.useState(false);
  const [iserror, setiserror] = React.useState(false);
  const [severity, setSeverity] = React.useState("error");

 
  console.log("==========================================", profilePic);
  const handle_change = (e) => {
    setiserror(false);
    if (e.target.name === "number") {
      setinputValues({
        ...inputValues,
        [e.target.name]: e.target.value.toString().slice(0, 11),
      });
    } else if (e.target.name === "cnic") {
      setinputValues({
        ...inputValues,
        [e.target.name]: e.target.value.toString().slice(0, 13),
      });
    } else {
      setinputValues({
        ...inputValues,

        [e.target.name]: e.target.value,
      });
    }
  };
  function handleUpload(e) {
    e.preventDefault();
    var file = e.target.files[0];
    const ref = Firebase.storage().ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        //   setFile(null);
        setinputValues({ ...inputValues, image: url });
      });
    });
  }

  const generatePassword = () => {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  const addUser = () => {
    let password = generatePassword();
    const email = inputValues.email;
    if (inputValues.name === "") {
      setiserror(true);
      setMessage("plaese enter name");
    } else if (inputValues.email === "") {
      setiserror(true);
      setMessage("plaese enter email");
    } else if (inputValues.number === "") {
      setiserror(true);
      setMessage("plaese enter number");
    } else if (inputValues.cnic === "") {
      setiserror(true);
      setMessage("plaese enter cnic");
    } else if (inputValues.image === upload_profile) {
      setiserror(true);
      setMessage("plaese enter image");
    } else {
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          var user = res.user;
          database
            .child("Alluser/" + user.uid)
            .set({
              email,
              name: inputValues.name,
              number: inputValues.number,
              cnic: inputValues.cnic,
              image: inputValues.image,
              uid: user.uid,
              securityCode: password,
            })
            .then((res) => {
              // CALL SERVER API HERE
              fetch(
                "https://society-management-project.herokuapp.com/route/sendemail",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    to: email,
                    subject: "Society Managements System",
                    text: `Congratulations you are added in Society Manangement Portal \n here is your account access \n email:${email} \n Password:${password} \n Login here:https:iskillers.com`,
                  }),
                }
              )
                .then((responece) => responece.json())
                .then((res) => console.log(res));

              // window.location.reload(false);

              setSeverity("success");
              setiserror(true);
              setMessage("success message");
              setinputValues({
                email: "",
                name: "",
                number: "",
                cnic: "",
                image: upload_profile,
              });

              console.log("successfully");
            })
            .catch((err) => {
              setMessage(err.message);
            });
        })
        .catch((error) => {
          var errorMessage = error.message;
          setiserror(true);
          setMessage(errorMessage);
        });
    }
  };

  const sendUser = () => {
    database
      .child("Alluser" + "/")
      .push(inputValues)
      .then((res) => {
        setinputValues({
          email: "",
          name: "",
          number: "",
          cnic: "",
          image: upload_profile,
        });
        console.log("okay");
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  let AllData = [
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
    { title: "Elevator" },
  ];
  return (
    <div className="home_page_main">
      {/* ===========================> <=========================== */}
      <Navbar path={props.history}>
        {/* ===========================> <=========================== */}
        <div className="Announcement_header_main">
          <div className="Announcement_header_icon_main">
            <FaAddressCard className="Announcement_header_icon" />
          </div>
          <p className="Announcement_header_heading">Add User</p>
        </div>
        {/* ===========================> <=========================== */}
        <br />
        <br />
        <br />
        <br />
        <Paper
          style={{
            textAlign: "center",
          }}
        >
          {/* ===========================> <=========================== */}
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Create User
          </h2>
          <Grid container justify="center">
            <Grid item xl={6}>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <div>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => handleUpload(e)}
                    name="image"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      style={{
                        position: "relative",
                        top: -40,
                        right: -73,
                      }}
                    >
                      <HiCamera size={25} color="lightgray" />
                    </IconButton>
                  </label>
                  <img
                    src={inputValues.image}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      border: "5px solid #3C1874",
                    }}
                  />
                </div>
              </div>
              {iserror === true ? (
                <Alert severity={severity}>{message}</Alert>
              ) : null}
              <br />
              <br />
              <br />

              <TextField
                id="outlined-textarea"
                label="UserName"
                placeholder="Enter Name of renter"
                variant="outlined"
                fullWidth
                type="name"
                autoComplete="email-address"
                className="login_email_input"
                value={inputValues.name}
                onChange={handle_change}
                name="name"
              />
              <br />
              <br />
              <br />
              <TextField
                id="outlined-textarea"
                label="Email Address"
                placeholder="Enter email of renter"
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
              <br />
              <TextField
                id="outlined-textarea"
                label="Mobile Number"
                placeholder="Enter mobile# of renter"
                variant="outlined"
                fullWidth
                type="number"
                autoComplete="email-address"
                className="login_email_input"
                value={inputValues.number}
                onChange={handle_change}
                name="number"
              />
              <br />
              <br />
              <br />
              <TextField
                id="outlined-textarea"
                label="CNIC Number"
                placeholder="Enter CNIC number of renter"
                variant="outlined"
                fullWidth
                type="number"
                autoComplete="email-address"
                className="login_email_input"
                value={inputValues.cnic}
                onChange={handle_change}
                name="cnic"
                inputProps={{}}
              />
              <br />
              <br />
              <br />
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                className="adduser_btn_text"
                onClick={() => addUser()}
              >
                {isLoader === false ? (
                  <span>Add User</span>
                ) : (
                  <span>Loading.....</span>
                )}
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
        </Paper>
      </Navbar>
    </div>
  );
}

export default AmenityBooking;
