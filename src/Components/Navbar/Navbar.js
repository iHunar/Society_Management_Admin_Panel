import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./Navbar.css";
import ProfileImg from "./../../img/profile.jpg";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Menu from "@material-ui/core/Menu";
import Logo from "./../../img/logo.png";
import { FaHome } from "react-icons/fa";
import { MdEventNote, MdLocalLibrary } from "react-icons/md";
import { FiGitPullRequest } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiPackage } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdLiveHelp } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { AiOutlineSound } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
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

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* ===========================> <=========================== */}
      <div className={classes.toolbar} />

      {/* ===========================> <=========================== */}
      <List>
        <img src={Logo} className="NavbarPage_Logo" alt="Logo" />

        {/* ===========================> <=========================== */}
        <Link to="/Home" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <FaHome className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Home</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        <Link to="/Announcement" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <AiOutlineSound className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Announcements</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        <Link to="/Events" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <MdEventNote className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Events</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        <Link to="/Library" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <MdLocalLibrary className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Library</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        <Link to="/ServiceRequest" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <FiGitPullRequest className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Service Requests</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        <Link to="/AmenityBooking" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <FaCalendarAlt className="_drawer_icon" size={27} />
              <div className="_drawerPageLInk">Amenity Booking</div>
            </ListItem>
          </a>
        </Link>
        {/* ===========================> <=========================== */}
        {/* <Link to="/MyAccount" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <VscAccount className="_drawer_icon" />
              <div className="_drawerPageLInk">My Account</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        {/* <Link to="/Packages" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <FiPackage className="_drawer_icon" />
              <div className="_drawerPageLInk">Packages</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        {/* <Link to="/Store" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <HiOutlineShoppingBag className="_drawer_icon" />
              <div className="_drawerPageLInk">Store</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        {/* <Link to="/ClassifiedAds" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <BsFileEarmarkSpreadsheet className="_drawer_icon" />
              <div className="_drawerPageLInk">Classified Ads</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        {/* <Link to="/Survey" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <RiSurveyLine className="_drawer_icon" />
              <div className="_drawerPageLInk">Survey</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        {/* <Link to="/UserGuide" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <MdLiveHelp className="_drawer_icon" />
              <div className="_drawerPageLInk">User Guide</div>
            </ListItem>
          </a>
        </Link> */}
        {/* ===========================> <=========================== */}
        <Link to="/" className="link_none">
          <a className="ml-1 link_color">
            <ListItem button>
              <FiLogOut className="_drawerlougout_icon" size={27} />
              <div className="_drawerPageLInkLogout">Log Out</div>
            </ListItem>
          </a>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* ===========================> <=========================== */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: "#3C1874" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* ===========================> <=========================== */}
          <div className="header_profile_main">
            <div className="projec_tittle">Housing Management</div>
            <img
              src={ProfileImg}
              alt="Profile Image"
              className="_profile_image"
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
