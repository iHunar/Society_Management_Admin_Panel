import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Announcement.css";
import { AiOutlineSound } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AnnouncementTable from "./../../Components/AnnouncementTable/AnnouncementTable";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
function Announcement() {
  const [selectCategory, setSelectCategory] = React.useState("");
  const [selectInput, setSearchInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  console.log("fsdfsfsdf", selectCategory);
  return (
    <div className="home_page_main">
      {/* ===========================> <=========================== */}
      <Navbar>
        {/* ===========================> <=========================== */}
        <div className="Announcement_header_main">
          <div className="Announcement_header_icon_main">
            <AiOutlineSound className="Announcement_header_icon" />
          </div>
          <p className="Announcement_header_heading">Announcement</p>
        </div>
        <Paper className="Announcement_main">

          {/* ===========================> <=========================== */}
          <br />
          <br />
          <div className={classes.root}>
            <Grid container spacing={1}>
              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={4}>
                <TextField
                  id="outlined-textarea"
                  label="Search Announcements"
                  placeholder="Search Announcements"
                  variant="outlined"
                  fullWidth
                  type="text"
                  autoComplete="Search Announcements"
                  className="login_email_input"
                  value={selectInput}
                  onChange={handleSearchValue}
                  focused={false}
                />
              </Grid>

              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={4}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label select_from_dropdown">
                    Select Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectCategory}
                    onChange={handleChange}
                    label="Select Category"
                  >
                    <MenuItem
                      value="Current Announcements"
                      className="login_dropdwon_value"
                    >
                      Current Announcements
                    </MenuItem>
                    <MenuItem
                      value="Past Announcements"
                      className="login_dropdwon_value"
                    >
                      Past Announcements
                    </MenuItem>
                    <MenuItem
                      value="All Announcements"
                      className="login_dropdwon_value"
                    >
                      All Announcements
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className="sing_btn_text"
                  onClick={() => Search()}
                >
                  Search
                </Button>
              </Grid>
              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className="sing_btn_text"
                  onClick={handleClickOpen2}
                >
                  New Announcement
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
                <AnnouncementTable />
                <AnnouncementTable />

                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />
                <AnnouncementTable />

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
          <DialogTitle id="max-width-dialog-title">New Announcement</DialogTitle>
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
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    variant="outlined"
                    fullWidth
                    type="date"
                    autoComplete="Announcements Title"
                    className="login_email_input"
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Announcement Description" fullWidth  style={{width:"100%",padding:"10px"}}/>
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="sing_btn_text"
                    onClick={handleClose2}
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
