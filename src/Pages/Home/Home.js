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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allAnnouncements: [],
      allEvents: [],
      allUsers: [],
      arr: [],
    };
  }

  componentDidMount = () => {
    this.getAllusers();
    this.getEvents();
    this.getAnnouncement();

    // do something
  };

  getAllusers = () => {
    let users = [];
    database.child("Alluser/").on("child_added", (res) => {
      let renter = res.val();
      renter.id = res.key;
      users.push(renter);
      this.setState({ allUsers: users });
    });
  };

  getAnnouncement = () => {
    var announcementArr = [];
    database.child("Announcements/").on("child_added", (res) => {
      let announcement = res.val();
      announcement.id = res.key;
      announcementArr.push(announcement);
      this.setState({ allAnnouncements: announcementArr });
    });
  };

  getEvents = () => {
    var newArr = [];
    database.child("Events/").on("child_added", (res) => {
      let e = res.val();
      e.id = res.key;
      newArr.push(e);
      this.setState({ arr: newArr });
    });
  };
  render() {
    let { allAnnouncements, allEvents, allUsers, arr } = this.state;
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
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <Paper
                    style={{
                      padding: "20px",
                      backgroundColor: "#3C1874",
                      color: "#fff",
                      cursor: "pointer",
                      marginTop: -30,
                    }}
                    onClick={() => this.props.history.push("/AllUsers")}
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
                      cursor: "pointer",
                      marginTop: -30,
                    }}
                    onClick={() => this.props.history.push("/Announcement")}
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
                      cursor: "pointer",
                      marginTop: -30,
                    }}
                    onClick={() => this.props.history.push("/Events")}
                  >
                    <div className="home_page_card_main">
                      <p className="home_page_card_heading">Total Events</p>
                      {/* <img src={Calendar} alt="Calendar" /> */}
                    </div>
                    <p className="home_page_total_counter">{arr.length}</p>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Paper
                    style={{
                      padding: "20px",
                      backgroundColor: "#3C1874",
                      color: "#fff",
                      cursor: "pointer",
                      marginTop: -30,
                    }}
                    onClick={() => this.props.history.push("/ServiceRequest")}
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
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {allAnnouncements.length !== 0
                ? allAnnouncements.map((val, i) => {
                    if (
                      i === allAnnouncements.length - 1 ||
                      i === allAnnouncements.length - 2
                    ) {
                      return (
                        <div>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} sm={12} xl={12} lg={12}>
                              <Paper
                                style={{ padding: "10px", marginTop: 10 }}
                                elevation={5}
                              >
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
                                      <Grid
                                        item
                                        xs={12}
                                        sm={10}
                                        xl={11}
                                        lg={10}
                                      >
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
                    }
                  })
                : null}
            </div>
            {/* ===========================> <=========================== */}
            <div className="home_page_card_main">
              <p className="home_page_card_heading">Recent Events</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {this.state.arr !== 0
                ? this.state.arr.map((v, i) => {
                    if (
                      i === this.state.arr.length - 1 ||
                      i === this.state.arr.length - 2
                    ) {
                      return (
                        <div>
                          <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} sm={6} xl={12} lg={12}>
                              <Paper
                                style={{ padding: "10px", marginTop: 10 }}
                                elevation={5}
                              >
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
                                      <Grid
                                        item
                                        xs={10}
                                        sm={10}
                                        xl={11}
                                        lg={10}
                                      >
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
                    }
                  })
                : null}
            </div>
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

export default Home;
