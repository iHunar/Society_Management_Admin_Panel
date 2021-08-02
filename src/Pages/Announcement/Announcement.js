import React, { useEffect, useState } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Announcement.css";
import { AiOutlineSound } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AnnouncementTable from "./../../Components/AnnouncementTable/AnnouncementTable";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
function Announcement(props) {
  const [selectCategory, setSelectCategory] = React.useState("");
  const [selectInput, setSearchInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [allAnnouncements, setallAnnouncements] = React.useState([]);
  const [newInputValues, setnewInputValues] = React.useState({
    announcementTittle: "",
    announcementDate: "",
    announcementDes: "",
    userAs: "",
  });
  const [userData, setuserData] = useState("");

  useEffect(() => {
    var announcements = [];
    database.child("Announcements/").on("child_added", (res) => {
      let announcement = res.val();
      announcement.id = res.key;
      announcements.push(announcement);
      setallAnnouncements(announcements);
      let user = JSON.parse(localStorage.getItem("userData"));
      setnewInputValues({
        ...newInputValues,
        userAs: user.type,
      });
    });
  }, []);

  console.log(newInputValues);
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

  const sendAnnouncement = () => {
    database
      .child("Announcements" + "/")
      .push(newInputValues)
      .then((res) => {
        setnewInputValues({
          announcementTittle: "",
          announcementDate: "",
          announcementDes: "",
        });
        localStorage.setItem(
          "announcements",
          JSON.stringify(allAnnouncements.length)
        );
      })
      .catch((err) => {
        setMessage(err.message);
      });
    handleClose2();
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
  const handleSearchValue = (event) => {
    setSearchInput(event.target.value);
  };

  const Search = () => {
    if (selectInput === "") {
      setMessage("Search Announcements");
      handleClick();
    } else if (selectCategory === "") {
      setMessage("Select Category");
      handleClick();
    } else {
    }
  };

  const handle_delete = async (id, index) => {
    await database
      .child(`Announcements/${id}`)
      .remove()
      .then((res) => {
        console.log("deleted", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log("err", err.message);
      });
    // setallAnnouncements(updatedAnnouncements);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  let arr = allAnnouncements;
  console.log("-------------", allAnnouncements);
  return (
    <div className="home_page_main">
      {/* ===========================> <=========================== */}
      <Navbar path={props.history}>
        {/* ===========================> <=========================== */}
        <div className="Announcement_header_main">
          <div className="Announcement_header_icon_main">
            <AiOutlineSound className="Announcement_header_icon" />
          </div>
          <p className="Announcement_header_heading">Announcements</p>
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
                  Create New Announcement
                </Button>
              </Grid>
            </Grid>
          </div>

          {/* ===========================> <=========================== */}
          <br />
          <br />
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                {arr.map((v, i) => (
                  <AnnouncementTable
                    announcementTittle={v.announcementTittle}
                    announcementDate={v.announcementDate}
                    announcementDes={v.announcementDes}
                    v={v}
                    delete_func={handle_delete}
                    index={i}
                  />
                ))}
              </Grid>
            </Grid>
          </div>
        </Paper>
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
          <DialogTitle id="max-width-dialog-title">
            New Announcement
          </DialogTitle>
          <DialogContent>
            <div className={classes.root}>
              <Grid container spacing={1}>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Announcements Title"
                    placeholder="Announcements Title"
                    variant="outlined"
                    fullWidth
                    type="text"
                    autoComplete="Announcements Title"
                    className="login_email_input"
                    name="announcementTittle"
                    value={newInputValues.announcementTittle}
                    onChange={handle_change}
                  />
                </Grid>
                {/* ===========================>  <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    variant="outlined"
                    fullWidth
                    type="date"
                    autoComplete="Announcements Title"
                    className="login_email_input"
                    name="announcementDate"
                    value={newInputValues.announcementDate}
                    onChange={handle_change}
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={5}
                    placeholder="Announcement Description"
                    fullWidth
                    style={{ width: "100%", padding: "10px" }}
                    name="announcementDes"
                    value={newInputValues.announcementDes}
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
                    onClick={sendAnnouncement}
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

export default Announcement;
