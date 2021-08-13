import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import "./ServiceRequest.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import WhatsAppImg from "./../../img/whatsapp-new-policy.jpeg";
import { IoArrowBackSharp } from "react-icons/io5";
import Grid from "@material-ui/core/Grid";
import { Firebase } from "./../../config/firebase/firebase";
const database = Firebase.database().ref("/");
const drawerWidth = 240;

class ServiceRequestDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: "",
      userEmail: props.location.state.v.email,
    };
  }
  handleConform() {
    console.log(this.props.location.state.v.id);
    database
      .child("ServiceRequest/" + this.props.location.state.v.id)
      .update({ status: "confirm" })
      .then((res) => {
        // API CALL
        fetch(
          "https://society-management-project.herokuapp.com/route/sendemail",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: this.state.userEmail,
              subject: "Society Managements System",
              text: `Congratulations you are services request in accepted  \n thanks to inform us`,
            }),
          }
        )
          .then((responece) => responece.json())
          .then((res) => console.log(res));
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className="home_page_main">
        {/* ===========================> <=========================== */}
        <Navbar path={this.props.history}>
          {/* ===========================> <=========================== */}
          <div className="Announcement_header_main">
            <Link to="/ServiceRequest" className="link_none">
              <IoArrowBackSharp
                style={{
                  width: "100px",
                  height: "50px",
                  color: "rgb(16 52 140)",
                }}
              />
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          {/* ===========================> <=========================== */}
          <div>
            <Grid container spacing={1}>
              {/* ===========================> <=========================== */}
              <Grid item xs={12} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                <div className="reques_type_title_main">
                  <span className="reques_type_title">Request Type : </span>
                  <span className="reques_type_title2">
                    {this.props.location.state.v.requestType}
                  </span>
                </div>
                <div className="reques_type_title_main">
                  <span className="reques_type_title">Request is for : </span>
                  <span className="reques_type_title2">
                    {this.props.location.state.v.requestFor}
                  </span>
                </div>
                <div className="reques_type_title_main">
                  <span className="reques_type_title">Subject : </span>
                  <span className="reques_type_title2">
                    {this.props.location.state.v.subject}
                  </span>
                </div>
                <div className="reques_type_title_main">
                  <span className="reques_type_title">
                    Detailed Description :{" "}
                  </span>
                  <span className="reques_type_title2">
                    {this.props.location.state.v.des}
                  </span>
                </div>

                <img
                  src={this.props.location.state.v.image}
                  alt="WhatsAppImg"
                  className="WhatsAppImgDes"
                />
                <div className="request_details_conf_main">
                  <div className="request_details_conf">
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      className="sing_btn_text"
                      onClick={() => this.handleConform()}
                      disabled={
                        this.props.location.state.v.status === "confirm"
                          ? true
                          : false
                      }
                    >
                      {this.props.location.state.v.status === "confirm" ? (
                        <span>conformed</span>
                      ) : (
                        <span>conform</span>
                      )}
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
                      Reject
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
}

export default ServiceRequestDetails;
