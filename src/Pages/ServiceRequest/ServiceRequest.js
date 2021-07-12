import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./ServiceRequest.css";
import Button from "@material-ui/core/Button";
import { FiGitPullRequest } from "react-icons/fi";
import {
    Link
} from 'react-router-dom';
import WhatsAppImg from './../../img/whatsapp-new-policy.jpeg'
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
function ServiceRequest() {
    const classes = useStyles();
    let AllData = [
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
        { title: "10 things you need to Know about WhatsApp New Policy" },
    ]
    return (
        <div className="home_page_main">
            {/* ===========================> <=========================== */}
            <Navbar>
                {/* ===========================> <=========================== */}
                <div className="Announcement_header_main">
                    <div className="Announcement_header_icon_main">
                        <FiGitPullRequest className="Announcement_header_icon" />
                    </div>
                    <p className="Announcement_header_heading">Service Requests</p>
                </div>

                {/* ===========================> <=========================== */}
                <br />
                <br />
                <br />
                <br />
                <table>
                    <tbody>
                        {AllData.map((v, i) => {
                            return (
                                <tr>
                                    <td >
                                        <p style={{ color: "blue" }}>

                                            {v.title}
                                        </p>

                                    </td>
                                    <td >
                                        <img src={WhatsAppImg} alt="WhatsAppImg" className="WhatsAppImg" />
                                    </td>
                                    <td>
                                        <Link to="/ServiceRequestDetails" className="link_none">
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                fullWidth
                                                className="sing_btn_text"
                                                onClick
                                            >
                                                View More
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Navbar>
        </div>
    );
}

export default ServiceRequest;
