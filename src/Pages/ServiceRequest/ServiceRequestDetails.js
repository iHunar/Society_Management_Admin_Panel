import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./ServiceRequest.css";
import Button from "@material-ui/core/Button";
import {
    Link
} from 'react-router-dom';
import WhatsAppImg from './../../img/whatsapp-new-policy.jpeg'
import { IoArrowBackSharp } from "react-icons/io5";
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
    input: {
        display: 'none',
    },
}));
function ServiceRequestDetails() {
    const classes = useStyles();
    return (
        <div className="home_page_main">
            {/* ===========================> <=========================== */}
            <Navbar>
                {/* ===========================> <=========================== */}
                <div className="Announcement_header_main">
                    <Link to="/ServiceRequest" className="link_none">
                        <IoArrowBackSharp style={{ width: "100px", height: "50px", color: "rgb(16 52 140)" }} />
                    </Link>
                </div>
                <br />
                <br />
                <br />
                <br />
                {/* ===========================> <=========================== */}
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        {/* ===========================> <=========================== */}
                        <Grid item xs={12} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                            <div className="reques_type_title_main">
                                <span className="reques_type_title">Request Type : </span>
                                <span className="reques_type_title2">Comment or Suggestion</span>
                            </div>
                            <div className="reques_type_title_main">
                                <span className="reques_type_title">Request is for : </span>
                                <span className="reques_type_title2">Board Members</span>
                            </div>
                            <div className="reques_type_title_main">
                                <span className="reques_type_title">Subject : </span>
                                <span className="reques_type_title2">10 things you need to Know about WhatsApp New Policy</span>
                            </div>
                            <div className="reques_type_title_main">
                                <span className="reques_type_title">Detailed Description : </span>
                                <span className="reques_type_title2">
                                    We know, the current change in Whatsapp privacy policy has changed several things, including the dependency of users on the app and their trust. This amendment made Whatsapp lose enormous users which benefited other apps including telegram.
                                    For the friends, relatives, and co-workers on WhatsApp, neither Facebook messenger nor Whatsapp will read the texts or listen to the calls. Anything you exchange, between you and the recipient, lasts. That’s how it preserves your private messages.
                                </span>
                            </div>

                            <img src={WhatsAppImg} alt="WhatsAppImg" className="WhatsAppImgDes" />
                            <div className="request_details_conf_main">
                                <div className="request_details_conf">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className="sing_btn_text"
                                        onClick
                                    >
                                        conform
                                    </Button>
                                </div>
                                <div className="request_details_conf">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className="sing_btn_text"
                                        onClick
                                    >
                                        delete
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={2}></Grid>
                    </Grid>
                </div>
            </Navbar>
        </div>
    );
}

export default ServiceRequestDetails;
