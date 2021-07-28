import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./ServiceRequest.css";
import Button from "@material-ui/core/Button";
import { FiGitPullRequest } from "react-icons/fi";
import { Link } from "react-router-dom";
import WhatsAppImg from "./../../img/whatsapp-new-policy.jpeg";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
    display: "none",
  },
}));
function ServiceRequest(props) {
  const classes = useStyles();
  let AllData = [
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
    { title: "10 things you need to Know about WhatsApp New Policy" },
  ];
  return (
    <div className="home_page_main">
      {/* ===========================> <=========================== */}
      <Navbar path={props.history}>
        {/* ===========================> <=========================== */}
        <div className="Announcement_header_main">
          <div className="Announcement_header_icon_main">
            <FiGitPullRequest className="Announcement_header_icon" />
          </div>
          <p className="Announcement_header_heading">Service Requests</p>
        </div>

        {/* ===========================>  <=========================== */}
        <br />
        <br />
        <br />
        <br />

        {AllData.map((v, i) => {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ color: "blue" }}>{v.title}</p>
                </div>
                <div>
                    <Grid item xs={1} sm={1} xl={12} lg={1}>
                      <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems:'center'                          
                        }}
                      >
                        <div style={{marginRight:10}}>12/12/2021 </div>
                            <Link to="/ServiceRequestDetails" className="link_none">
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          fullWidth
                          className="sing_btn_text"
                        >
                          View
                        </Button>
                  </Link>
                      </div>
                    </Grid>
                </div>
              </div>
              <Divider />
            </div>
          );
        })}
      </Navbar>
    </div>
  );
}

export default ServiceRequest;
