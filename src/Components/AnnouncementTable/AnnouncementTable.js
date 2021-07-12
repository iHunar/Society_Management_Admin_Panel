import React, { useState } from "react";
import "./AnnouncementTable.css";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { AiOutlineSound, AiOutlineDelete } from "react-icons/ai";
import { BiEdit, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IconButton } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from "@material-ui/core/TextField";

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

export default function StickyHeadTable() {
  const [Acordian, setAcordian] = useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const classes = useStyles();


  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const preventDefault = (event) => event.preventDefault();
  const handleAcordian = () => {
    setAcordian(!Acordian);
    console.log(Acordian);
    // alert("dfd");
  };

  return (
      <div>

    <table className="AnnouncementTable_main">
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
                    <div></div>
                  </Grid>
                </Grid>
              </div>
              <Grid item xs={1} sm={1} xl={1} lg={1}>
                <span style={{ marginRight: 10,cursor:'pointer' }}>
                  <BiEdit size={30} color="#3C1874"   onClick={handleClickOpen2}/>
                </span>
                <span style={{cursor:'pointer' }}>
                  <AiOutlineDelete size={30} color="#3C1874" />
                </span>
                {Acordian === true ? (
                  <span style={{ marginLeft: 10, cursor:'pointer' }}>
                    <BiChevronUp
                      size={30}
                      color="#000"
                      onClick={() => handleAcordian()}
                    />
                  </span>
                ) : (
                  <span style={{ marginLeft: 10,cursor:'pointer' }}>
                    <BiChevronDown
                      size={30}
                      color="#000"
                      onClick={() => handleAcordian()}
                    />
                  </span>
                )}
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {Acordian === true ? (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6} xl={12} lg={12}>
            <Paper style={{ padding: "10px" }} elevation={5}>
              <div className="">
                <div style={{fontWeight:'bold'}}>Details</div>
                <div style={{}}>20/21/2021</div>

                <Divider />
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
                <Divider />
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      ) : null}
    </table>

    <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open2}
          onClose={handleClose2}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">New Announcement</DialogTitle>
          <DialogContent>
            <div className={classes.root}>
              <Grid container spacing={1}>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Announcements Title"
                    placeholder="Announcements Title"
                    variant="outlined"
                    fullWidth
                    type="text"
                    autoComplete="Announcements Title"
                    className="login_email_input"
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-textarea"
                    variant="outlined"
                    fullWidth
                    type="date"
                    autoComplete="Announcements Title"
                    className="login_email_input"
                  />
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Announcement Description" fullWidth  style={{width:"100%",padding:"10px"}}/>
                </Grid>
                {/* ===========================> <=========================== */}
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="sing_btn_text"
                    onClick={handleClose2}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
            <br />
          </DialogContent>
        </Dialog>
      </div>

    
  );
}
