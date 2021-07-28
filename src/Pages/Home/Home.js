import React, { useEffect, useState } from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { AiOutlineSound } from "react-icons/ai";
import { Firebase } from "./../../config/firebase/firebase";
import Link from "@material-ui/core/Link";
import Footer from "./../../Components/footer/footer";
import { MdEventNote } from "react-icons/md";
import { Subscriptions } from "@material-ui/icons";
const database = Firebase.database().ref("/");
// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));
class Home extends React.Component {
  constructor() {
    // const classes = useStyles();
    super();
    this.state = {
      allAnnouncements: [],
      allEvents: [],
      allUsers: [],
    };
  }
  componentDidMount() {
    database.child("Announcements/").on("child_added", (res) => {
      let announcement = res.val();
      announcement.id = res.key;
     this.state.allAnnouncements.push(announcement);
      this.setState({ allAnnouncements: this.state.allAnnouncements });
    });
    let users = [];
    database.child("Alluser/").on("child_added", (res) => {
      let renter = res.val();
      renter.id = res.key;
      users.push(renter);
      this.setState({ allUsers: users });
    });

    let events = [];
    database.child("Events/").on("child_added", (res) => {
      let event = res.val();
      event.id = res.key;
      events.push(event);
      this.setState({ allEvents: events });
    });
  }
  render() {
    let { allAnnouncements, allEvents, allUsers } = this.state;
    return (
      <div>
        <Navbar path={this.props.history}>
          {/* ===========================>  <=========================== */}
          <br />
          <br />
          <br />
          <br />
          <div className="home_main">
            {/* ===========================> <=========================== */}
            <div >
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
                      <p className="home_page_card_heading">Total Renters</p>
                      {/* <img src={Mortgagz} alt="Mortgagz" /> */}
                    </div>
                    <p className="home_page_total_counter">{allUsers.length}</p>
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
                      <p className="home_page_card_heading">
                        Total Announcements
                      </p>
                      {/* <img src={Advertising} alt="Advertising" /> */}
                    </div>
                    <p className="home_page_total_counter">
                      {allAnnouncements.length}
                    </p>
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
                    <p className="home_page_total_counter">
                      {allEvents.length}
                    </p>
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
            {allAnnouncements.length !== 0
              ? allAnnouncements
                  .reverse()
                  .splice(0, 2)
                  .map((val, i) => {
                    return (
                      <div >
                        <Grid container spacing={3} alignItems="center">
                          <Grid item xs={12} sm={12} xl={12} lg={12}>
                            <Paper style={{ padding: "10px" }} elevation={5}>
                              <div className="home_page_card_main">
                                <div style={{ flex: 1 }}>
                                  <Grid container alignItems="center">
                                    <Grid item xs={12} sm={10} xl={1} lg={10}>
                                      <p className="announcement_tittle">
                                        <div className="Announcement_recent_icon_main">
                                          <AiOutlineSound className="Announcement_recent_icon" />
                                        </div>
                                      </p>
                                    </Grid>
                                    <Grid item xs={12} sm={10} xl={11} lg={10}>
                                      <div className="announcement_tittle">
                                        {val.announcementTittle}
                                      </div>
                                      <div>
                                        <span>Date: </span>{" "}
                                        {val.announcementDate}
                                      </div>
                                    </Grid>
                                  </Grid>
                                </div>
                                <Grid item xs={6} sm={4} xl={1} lg={1}>
                                  <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    className="sing_btn_text"
                                    onClick={() =>
                                      this.props.history.push("/Announcement")
                                    }
                                  >
                                    View Details
                                  </Button>
                                </Grid>
                              </div>
                            </Paper>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })
              : null}

            {/* ===========================> <=========================== */}
            <div className="home_page_card_main">
              <p className="home_page_card_heading">Recent Events</p>
            </div>
            {allEvents !== 0
              ? allEvents
                  .reverse()
                  .splice(0, 2)
                  .map((v, i) => {
                    return (
                      <div >
                        <Grid container spacing={3} alignItems="center">
                          <Grid item xs={12} sm={6} xl={12} lg={12}>
                            <Paper style={{ padding: "10px" }} elevation={5}>
                              <div className="home_page_card_main">
                                <div style={{ flex: 1 }}>
                                  <Grid container alignItems="center">
                                    <Grid item xs={10} sm={10} xl={1} lg={10}>
                                      <p className="announcement_tittle">
                                        <div className="Announcement_recent_icon_main">
                                          <MdEventNote className="Announcement_recent_icon" />
                                        </div>
                                      </p>
                                    </Grid>
                                    <Grid item xs={10} sm={10} xl={11} lg={10}>
                                      <div className="announcement_tittle">
                                        {v.eventTittle}
                                      </div>
                                      <div>
                                        <span>Date: </span>
                                        {v.eventDate}
                                      </div>
                                    </Grid>
                                  </Grid>
                                </div>
                                <Grid item xs={6} sm={1} xl={1} lg={1}>
                                  <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    className="sing_btn_text"
                                    onClick={() =>
                                      this.props.history.push("/Events")
                                    }
                                  >
                                    View Details
                                  </Button>
                                </Grid>
                              </div>
                            </Paper>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })
              : null}
            <br />
            <br />
            <br />
            <br />
          </div>
          <Footer />
        </Navbar>
      </div>
    );
  }
}
// function Home(props) {
//   const classes = useStyles();
//   const [allAnnouncements, setallAnnouncements] = React.useState([]);
//   const [allEvents, setallEvents] = React.useState([]);
//   const [allUsers, setAllUsers] = React.useState([]);

//   useEffect(() => {
//     database.child("Announcements/").on("child_added", (res) => {
//       let announcement = res.val();
//       announcement.id = res.key;
//       allAnnouncements.push(announcement);
//       setallAnnouncements(allAnnouncements);
//     });
//     let users = [];
//     database.child("Alluser/").on("child_added", (res) => {
//       let renter = res.val();
//       renter.id = res.key;
//       users.push(renter);
//       setAllUsers(users);
//     });

//     let events = [];
//     database.child("Events/").on("child_added", (res) => {
//       let event = res.val();
//       event.id = res.key;
//       events.push(event);
//       setallEvents(events);
//     });
//   }, []);
//   return (

//   );
// }

export default Home;
