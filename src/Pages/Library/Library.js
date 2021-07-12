import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Library.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {  MdLocalLibrary } from "react-icons/md";
import Link from '@material-ui/core/Link';
import { FaFilePdf } from "react-icons/fa";
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
function Library() {
    const [selectCategory, setSelectCategory] = React.useState("");
    const [selectCategory2, setSelectCategory2] = React.useState("");
    const [selectEvents, setSearchEvents] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const preventDefault = (event) => event.preventDefault();
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
    const handleChange2 = (event) => {
        setSelectCategory2(event.target.value);
    };
    const handleSearchEvents = (event) => {
        setSearchEvents(event.target.value);
    };

    const Search = () => {
        if (selectEvents === "") {
            setMessage("Search Events");
            handleClick();
        } else if (selectCategory === "") {
            setMessage("Select File Type");
            handleClick();
        } else if (selectCategory2 === "") {
            setMessage("Select Date");
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
                        <MdLocalLibrary className="Announcement_header_icon" />
                    </div>
                    <p className="Announcement_header_heading">Library</p>
                </div>

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
                                autoComplete="Search Library"
                                className="login_email_input"
                                value={selectEvents}
                                onChange={handleSearchEvents}
                                focused={false}
                            />
                        </Grid>

                        {/* ===========================> <=========================== */}
                        <Grid item xs={12} sm={3}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-outlined-label select_from_dropdown">
                                    All File Types
                                    </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={selectCategory}
                                    onChange={handleChange}
                                    label="Filter Events"
                                >
                                    <MenuItem
                                        value="PDF"
                                        className="login_dropdwon_value"
                                    >
                                        PDF
                                        </MenuItem>
                                    <MenuItem
                                        value="JPEG"
                                        className="login_dropdwon_value"
                                    >
                                        JPEG
                                        </MenuItem>
                                    <MenuItem
                                        value="GIF"
                                        className="login_dropdwon_value"
                                    >
                                        GIF
                                        </MenuItem>
                                    <MenuItem
                                        value="DOC"
                                        className="login_dropdwon_value"
                                    >
                                        DOC
                                        </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* ===========================> <=========================== */}
                        <Grid item xs={12} sm={3}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-outlined-label select_from_dropdown">
                                    All Dates
                                    </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={selectCategory2}
                                    onChange={handleChange2}
                                    label="All Dates"
                                >
                                    <MenuItem
                                        value="05/10/2021"
                                        className="login_dropdwon_value"
                                    >
                                        05/10/2021
                                        </MenuItem>
                                    <MenuItem
                                        value="05/09/2021"
                                        className="login_dropdwon_value"
                                    >
                                        05/09/2021
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
                    </Grid>
                </div>

                <Paper className="Announcement_main">
                    {/* ===========================> <=========================== */}
                    <div className="Announcement_header_main">
                        <div className={classes.root}>
                            <Grid container spacing={1}>
                                {/* ===========================> <=========================== */}
                                <Grid item xs={12} sm={10}>
                                    <p className="Announcement_header_heading">Recent Uploads (30 days)</p>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className="sing_btn_text"
                                    >
                                        More
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </div>
                    {/* ===========================> <=========================== */}
                    <br />
                    <div className={classes.root}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={2}>
                                <div className="libray_recent_uploaded_show_main">
                                    <FaFilePdf className="pdf_icon" />
                                </div>
                                <div className="pdf_link_mian">
                                    <Link href="#" onClick={preventDefault} variant="body2">
                                        {'iskillers.com'}
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <div className="libray_recent_uploaded_show_main">
                                    <FaFilePdf className="pdf_icon" />
                                </div>
                                <div className="pdf_link_mian">
                                    <Link href="#" onClick={preventDefault} variant="body2">
                                        {'iskillers.com'}
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>

                {/* ===========================> <=========================== */}
                {/* <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Paper className="Announcement_main">
                                <p className="Announcement_header_heading">Folders</p>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className="Announcement_main">
                                <p className="Announcement_header_heading">File Library</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </div> */}
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </Snackbar>
            </Navbar>
        </div>
    );
}

export default Library;
