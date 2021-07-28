import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./MyAccount.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { VscAccount } from "react-icons/vsc";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
function MyAccount(props) {
    const [selectCategory, setSelectCategory] = React.useState("");
    const [selectEvents, setSearchEvents] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
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
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }


    let Data = [
        { title: "My Unit(s) :", value: "6464" },
        { title: "First Name :", value: "Hishmat" },
        { title: "Last Name :", value: "Rai" },
        { title: "Company Name :", value: "iSkillers" },
        { title: "Date Of Birth :", value: "20/11/1998" },
        { title: "User Group :", value: "ABC" },
        { title: "Mobile Number :", value: "+92 346 0857289" },
        { title: "Email Address :", value: "hishmatrai.2018@gmail.com" },
        { title: "Unsubscribe from Email Notification :", value: "No" },
        { title: "Required Assistance :", value: "No" },
        { title: "Language Preference :", value: "English" },
    ]
    return (
        <div className="home_page_main">
            {/* ===========================> <=========================== */}
            <Navbar path={props.history}>
                {/* ===========================> <=========================== */}
                <div className="Announcement_header_main">
                    <div className="Announcement_header_icon_main">
                        <VscAccount className="Announcement_header_icon" />
                    </div>
                    <p className="Announcement_header_heading">My Account</p>
                </div>

                {/* ===========================> <=========================== */}
                <br />
                <br />
                <Paper className="Announcement_main">
                    {Data.map((v, i) => {
                        return (
                            <div className={classes.root} style={{ marginTop: "-30px" }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={6} sm={6}>
                                        <div className="myAccoundTilte">
                                            <p className="myAccounttitleText">{v.title}</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <div>
                                            <p className="myAccounttitleText2">{v.value}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })}
                </Paper>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </Snackbar>
            </Navbar>
        </div>
    );
}

export default MyAccount;
