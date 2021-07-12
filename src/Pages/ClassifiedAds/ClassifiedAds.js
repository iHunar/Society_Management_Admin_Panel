import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./ClassifiedAds.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
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
function ClassifiedAds() {
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
                            <BsFileEarmarkSpreadsheet className="Announcement_header_icon" />
                        </div>
                        <p className="Announcement_header_heading">Classified Ads</p>
                    </div>

                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {message}
                    </Alert>
                </Snackbar>
            </Navbar>
        </div>
    );
}

export default ClassifiedAds;
