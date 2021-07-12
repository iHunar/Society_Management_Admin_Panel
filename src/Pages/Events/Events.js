import React from "react";
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
function Events() {
    const [selectCategory, setSelectCategory] = React.useState("");
    const [selectEvents, setSearchEvents] = React.useState("");
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
    const handleSearchEvents = (event) => {
        setSearchEvents(event.target.value);
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

    return (
        <div className="home_page_main">
            {/* ===========================> <=========================== */}
            <Navbar>
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
                        <Grid container spacing={1}>
                            {/* ===========================> <=========================== */}
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Search Events"
                                    placeholder="Search Events"
                                    variant="outlined"
                                    fullWidth
                                    type="text"
                                    autoComplete="Search Events"
                                    className="login_email_input"
                                    value={selectEvents}
                                    onChange={handleSearchEvents}
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
                                        Filter Events
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={selectCategory}
                                        onChange={handleChange}
                                        label="Filter Events"
                                    >
                                        <MenuItem
                                            value="Active Events"
                                            className="login_dropdwon_value"
                                        >
                                            Active Events
                                        </MenuItem>
                                        <MenuItem
                                            value="Cancelled Events"
                                            className="login_dropdwon_value"
                                        >
                                            Cancelled Events
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
                                    New Event
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
                                <Calender />
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
                                    />
                                </Grid>
                                {/* ===========================> <=========================== */}
                                <Grid item xs={12} sm={12}>
                                    <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Event Description" fullWidth style={{ width: "100%", padding: "10px" }} />
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

export default Events;
