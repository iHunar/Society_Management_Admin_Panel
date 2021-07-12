import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { AiOutlineSound } from "react-icons/ai";

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
function Home() {
  const classes = useStyles();
  return (
    <div>
      {/* ===========================> <=========================== */}
      <Navbar>
        {/* ===========================> <=========================== */}
        <br />
        <br />
        <br />
        <br />
        <div className="home_main">
          {/* ===========================> <=========================== */}
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Paper
                  style={{
                    padding: "20px",
                    backgroundColor: "#3C1874",
                    color: "#fff",
                  }}
                >
                  <div className="home_page_card_main">
                    <p className="home_page_card_heading">Total Renter</p>
                    {/* <img src={Mortgagz} alt="Mortgagz" /> */}
                  </div>
                  <p className="home_page_total_counter">120</p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  style={{
                    padding: "20px",
                    backgroundColor: "#3C1874",
                    color: "#fff",
                  }}
                >
                  <div className="home_page_card_main">
                    <p className="home_page_card_heading">Total Announcement</p>
                    {/* <img src={Advertising} alt="Advertising" /> */}
                  </div>
                  <p className="home_page_total_counter">10</p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  style={{
                    padding: "20px",
                    backgroundColor: "#3C1874",
                    color: "#fff",
                  }}
                >
                  <div className="home_page_card_main">
                    <p className="home_page_card_heading">Total Events</p>
                    {/* <img src={Calendar} alt="Calendar" /> */}
                  </div>
                  <p className="home_page_total_counter">50</p>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  style={{
                    padding: "20px",
                    backgroundColor: "#3C1874",
                    color: "#fff",
                  }}
                >
                  <div className="home_page_card_main">
                    <p className="home_page_card_heading">Total Requests</p>
                    {/* <img src={Question} alt="Question" /> */}
                  </div>
                  <p className="home_page_total_counter">70</p>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          {/* ===========================> <=========================== */}
          <div className="home_page_card_main">
            <p className="home_page_card_heading">Recent Announcement</p>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6} xl={12} lg={12}>
                <Paper style={{ padding: "10px" }} elevation={5}>
                  <div className="home_page_card_main">
                    <div style={{ flex: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={10} sm={10} xl={1} lg={10}>
                          <p className="announcement_tittle">
                            <div className="Announcement_recent_icon_main">
                              <AiOutlineSound className="Announcement_recent_icon" />
                            </div>
                          </p>
                        </Grid>
                        <Grid item xs={10} sm={10} xl={11} lg={10}>
                          <div className="announcement_tittle">
                            50 & 60 Garage Power wash
                          </div>
                          <div>
                            <span>Date: </span>12/13/2021
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <Grid item xs={1} sm={1} xl={1} lg={1}>
                      <Button size="small" color="primary" variant="contained" fullWidth className='sing_btn_text'>
                        View Details
                      </Button>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>

          {/* ===========================> <=========================== */}
          <div className="home_page_card_main">
            <p className="home_page_card_heading">Recent Announcement</p>
          </div>
          <div className={classes.root}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={6} xl={12} lg={12}>
                <Paper style={{ padding: "10px" }} elevation={5}>
                  <div className="home_page_card_main">
                    <div style={{ flex: 1 }}>
                      <Grid container alignItems="center">
                        <Grid item xs={10} sm={10} xl={1} lg={10}>
                          <p className="announcement_tittle">
                            <div className="Announcement_recent_icon_main">
                              <AiOutlineSound className="Announcement_recent_icon" />
                            </div>
                          </p>
                        </Grid>
                        <Grid item xs={10} sm={10} xl={11} lg={10}>
                          <div className="announcement_tittle">
                            50 & 60 Garage Power wash
                          </div>
                          <div>
                            <span>Date: </span>12/13/2021
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <Grid item xs={1} sm={1} xl={1} lg={1}>
                      <Button size="small" color="primary" variant="contained" fullWidth className='sing_btn_text'>
                        View Details
                      </Button>
                    </Grid>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </Navbar>
    </div>
  );
}

export default Home;
