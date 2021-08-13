import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="_footerDiv">
        <Container>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item lg={5} xs={12}>
              <div>
                <p className="IBC">iSkillers online classes</p>
                <p className="_siteDes">
                  iSkillers announcing iSkillers Boot Camp (IBC) and Online
                  Indiviual Training (OIT) Programes, It is online program
                  designed for students considering a career in the IT field.
                </p>
                <div className="_socialIconDiv">
                  <AiFillFacebook size="24" className="_socialIcon" />

                  <AiFillTwitterSquare size="24" className="_socialIcon" />

                  <AiFillLinkedin size="24" className="_socialIcon" />

                  <AiFillInstagram size="24" className="_socialIcon" />
                </div>
              </div>
            </Grid>
            <Grid item lg={3} xs={12}>
              <div>
                <p className="_pagesHeading">Pages</p>
                <RouterLink to="/home" style={{ textDecoration: "none" }}>
                  <p className="_pageName">Home</p>
                </RouterLink>
                <RouterLink
                  to="/Announcement"
                  style={{ textDecoration: "none" }}
                >
                  <p className="_pageName">Announcement</p>
                </RouterLink>
                <RouterLink to="/Events" style={{ textDecoration: "none" }}>
                  <p className="_pageName">Events</p>
                </RouterLink>
                <RouterLink
                  to="/ServiceRequest"
                  style={{ textDecoration: "none" }}
                >
                  <p className="_pageName">ServiceRequest</p>
                  {/* faq */}
                </RouterLink>
                <RouterLink
                  to="/AmenityBooking"
                  style={{ textDecoration: "none" }}
                >
                  <p className="_pageName">AmenityBooking</p>
                </RouterLink>
              </div>
            </Grid>
            <Grid item lg={3} xs={12}>
              <div className="_footerContactDiv">
                <p className="_pagesHeading">Contact Us</p>
                <div
                  className="_contact_us_div"
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <BiLocationPlus />
                  <span className="_contactUsTxt">
                    1st Floor Kallar House, North Colony, Mithi, Pakistan
                  </span>
                </div>
                <div
                  className="_contact_us_div"
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <BiPhone />
                  <span className="_contactUsTxt">+92-33-22511711</span>
                </div>
                <div
                  className="_contact_us_div"
                  style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AiFillMail />
                  <span className="_contactUsTxt">info@iskillers.com</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
