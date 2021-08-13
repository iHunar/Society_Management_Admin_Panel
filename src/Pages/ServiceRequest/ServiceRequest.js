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
import { Firebase } from "./../../config/firebase/firebase";
const database = Firebase.database().ref("/");

const drawerWidth = 240;
class ServiceRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      allRequests: [],
      user: "",
      requestFor: "",
    };
  }
  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    this.setState({ user: userData.email });
    console.log(userData);
    var ServiceRequest = [];
    database.child("ServiceRequest/").on("child_added", (res) => {
      let requests = res.val();
      requests.id = res.key;
      console.log(requests);
      this.setState({ requestFor: requests.requestFor });
      if (
        requests.requestFor === userData.type ||
        requests.requestFor === "Both"
      ) {
        ServiceRequest.push(requests);
        this.setState({ allRequests: ServiceRequest });
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="home_page_main">
        {/* ===========================> <=========================== */}
        <Navbar path={this.props.history}>
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

          {this.state.allRequests.map((v, i) => {
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
                    <p style={{ color: "blue" }}>{v.requestType}</p>
                  </div>
                  <div>
                    <Grid item xs={1} sm={1} xl={12} lg={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ marginRight: 10 }}>12/12/2021 </div>

                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          fullWidth
                          className="sing_btn_text"
                          onClick={() =>
                            this.props.history.push("/ServiceRequestDetails", {
                              v,
                            })
                          }
                        >
                          View
                        </Button>
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
}

export default ServiceRequest;
