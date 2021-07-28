import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./allUsers.css";
import { AiOutlineSound } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AnnouncementTable from "./../../Components/AnnouncementTable/AnnouncementTable";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Firebase } from "./../../config/firebase/firebase";
import upload_profile from "./../../img/upload_profile.png";
import { AiOutlineUserDelete } from "react-icons/ai";
import Checkbox from "@material-ui/core/Checkbox";
import { ImUsers } from "react-icons/im";

const database = Firebase.database().ref("/");

class AllUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: null,
    };
  }
  componentDidMount = async () => {
    var renter = [];
    database.child("Alluser/").on("child_added", (res) => {
      let users = res.val();
      users.id = res.key;
      console.log(users);
      renter.push(users);
      this.setState({ allUsers: renter });
    });
  };
  handle_delete = async (id, index) => {
    await database
      .child(`Alluser/${id}`)
      .remove()
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };
  render() {
    let { allUsers } = this.state;
    return (
      <div className="home_page_main">
        <p>gjhgjkhk</p>
        <Navbar path={this.props.history}>
          <div className="Announcement_header_main">
            <div className="Announcement_header_icon_main">
              <ImUsers className="Announcement_header_icon" />
            </div>
            <p className="Announcement_header_heading">All Users</p>
          </div>
          {allUsers &&
            allUsers.map((v, i) => (
              <Paper style={{ padding: 10, margin: 10 }}>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={5} sm={5} xl={5} lg={5}>
                    <Grid container alignItems="center">
                      <Grid item xs={5} sm={4} xl={2} lg={2}>
                        <div>
                          <img
                            src={v.image}
                            style={{
                              width: 50,
                              height: 50,
                              borderRadius: 100,
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} xl={5} lg={5}>
                        <div>
                          <div>{v.name}</div>
                        </div>
                      </Grid>
                      <Grid item xs={4} sm={4} xl={5} lg={5}>
                        <div>
                          <div>{v.number}</div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} sm={5} xl={5} lg={6}>
                    <div></div>
                  </Grid>

                  <Grid item xs={2} sm={2} xl={2} lg={2}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ margin: 5, cursor: "pointer" }}>
                        <AiOutlineUserDelete
                          size={20}
                          onClick={() => this.handle_delete(v.id, i)}
                        />
                      </div>
                      <div style={{ margin: 5 }}>
                        <Checkbox
                          inputProps={{
                            "aria-label": "uncontrolled-checkbox",
                          }}
                          className="check_box"
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            ))}
        </Navbar>
      </div>
    );
  }
}

export default AllUsers;
