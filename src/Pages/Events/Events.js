import React, { useEffect } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Events.css";
import { AiOutlineSound } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Calender from "./../../Components/Calender/Calender";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { MdEventNote, MdLocalLibrary } from "react-icons/md";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import EventCard from "./../../Components/eventCard/eventCard";
import { Firebase } from "./../../config/firebase/firebase";
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
}));
function Events(props) {
  const [selectCategory, setSelectCategory] = React.useState("");
  const [selectEvents, setSearchEvents] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [allEvents, setallEvents] = React.useState([]);
  const [newInputValues, setnewInputValues] = React.useState({
    eventTittle: "",
    eventDate: "",
    eventDes: "",
    userAs: "",
  });

  useEffect(() => {
    var events = [];
    database.child("Events/").on("child_added", (res) => {
      let event = res.val();
      event.id = res.key;
      events.push(event);
      setallEvents(events);
      let user = JSON.parse(localStorage.getItem("userData"));
      console.log("user", user);
      setnewInputValues({
        ...newInputValues,
        userAs: user.type,
      });
    });
  }, []);
  console.log("==========================value ", newInputValues);
  const handle_change = (e) => {
    setnewInputValues({
      ...newInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
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
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };
  const handleSearchEvents = (event) => {
    setSearchEvents(event.target.value);
  };
  const sendEvent = () => {
    console.log(newInputValues);
    database
      .child("Events" + "/")
      .push(newInputValues)
      .then((res) => {
        setnewInputValues({
          ...newInputValues,
          eventTittle: "",
          eventDate: "",
          eventDes: "",
        });
      })
      .catch((err) => {
        setMessage(err.message);
      });
    handleClose2();
  };

  const Search = () => {
    if (selectEvents === "") {
      setMessage("Search Events");
      handleClick();
    } else if (selectCategory === "") {
      setMessage("Select Filter Events");
      handleClick();
    } else {
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handle_delete = async (id, index) => {
    await database
      .child(`Events/${id}`)
      .remove()
      .then((res) => {
        // console.log("deleted", res);
        window.location.reload();
      })
      .catch((err) => {
        // console.log("err", err.message);
      });
  };

  return (
    <div className="home_page_main">
      {/* ===========================> <=========================== */}
      <Navbar path={props.history}>
        {/* ===========================> <=========================== */}
        <div className="Announcement_header_main">
          <div className="Announcement_header_icon_main">
            <MdEventNote className="Announcement_header_icon" />
          </div>
          <p className="Announcement_header_heading">Events</p>
        </div>
        <Paper className="Announcement_main">
          {/* ===========================> <=========================== */}
          <br />
          <br />
          <div className={classes.root}>
            <Grid container spacing={1} justify="flex-end">
              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className="sing_btn_text"
                  onClick={handleClickOpen2}
                >
                  Create New Event
                </Button>
              </Grid>
            </Grid>
          </div>

          {/* ===========================> <=========================== */}
        </Paper>
        {allEvents.map((v, i) => {
          return <EventCard data={v} delete_func={handle_delete} index={i} />;
        })}
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open2}
          onClose={handleClose2}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">New Events</DialogTitle>
          <DialogContent>
            <div className={classes.root}>
              <Grid container spacing={1}>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Event Title"
                    placeholder="Event Title"
                    variant="outlined"
                    fullWidth
                    type="text"
                    autoComplete="Event Title"
                    className="login_email_input"
                    name="eventTittle"
                    value={newInputValues.eventTittle}
                    onChange={handle_change}
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    variant="outlined"
                    fullWidth
                    type="date"
                    autoComplete="Event Title"
                    className="login_email_input"
                    name="eventDate"
                    value={newInputValues.eventDate}
                    onChange={handle_change}
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={5}
                    placeholder="Event Description"
                    fullWidth
                    style={{ width: "100%", padding: "10px" }}
                    name="eventDes"
                    value={newInputValues.eventDes}
                    onChange={handle_change}
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="sing_btn_text"
                    onClick={sendEvent}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
            <br />
          </DialogContent>
        </Dialog>
      </Navbar>
    </div>
  );
}

export default Events;
