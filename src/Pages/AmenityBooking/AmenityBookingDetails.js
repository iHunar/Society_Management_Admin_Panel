import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
    Link,
} from 'react-router-dom';
import WhatsAppImg from './../../img/whatsapp-new-policy.jpg'
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
function AmenityBookingDetails() {
    const classes = useStyles();
    return (
        <div className="home_page_main">
            {/* ===========================> <=========================== */}
            <Navbar>
                {/* ===========================> <=========================== */}
                <div className="Announcement_header_main">
                    <Link to="/AmenityBooking" className="link_none">
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
                                <span className="reques_type_title">I want to book : </span>
                                <span className="reques_type_title2">Elevator</span>
                            </div>
                            <div className="reques_type_title_main">
                                <span className="reques_type_title">Event Description/Notes (visible to administrators)</span>
                                <span className="reques_type_title2">Many phobias can be traced to a previous experience that caused fright. Those who have been stuck in an elevator, even briefly, may be more likely to develop an elevator phobia.5﻿ However, the experience need not have happened to you.


                                    Elevators are prominently featured in many horror movies, Halloween events, and other scary pop culture moments. On the rare occasion that something goes wrong with an elevator in real life, the story is constantly rebroadcast for days in the media, and the video may circulate online for years.</span>
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

export default AmenityBookingDetails;
