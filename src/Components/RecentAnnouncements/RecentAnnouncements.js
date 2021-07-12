import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './RecentAnnouncements.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function RecentAnnouncements() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      {/* ===========================> <=========================== */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="accordian_heding">
            Microsoft announcement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian_des">
            Microsoft isn’t talking about its big Windows plans at Build 2021
            this week, and that’s because the company is preparing to detail
            what’s next for its PC operating system separately. Microsoft CEO
            Satya Nadella teased this announcement during his Build keynote this
            morning, revealing he has been testing “the next generation of
            Windows” in recent months.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ===========================> <=========================== */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="accordian_heding">
            Facebook announcement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian_des">
            Microsoft isn’t talking about its big Windows plans at Build 2021
            this week, and that’s because the company is preparing to detail
            what’s next for its PC operating system separately. Microsoft CEO
            Satya Nadella teased this announcement during his Build keynote this
            morning, revealing he has been testing “the next generation of
            Windows” in recent months.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ===========================> <=========================== */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="accordian_heding">
            Twitter announcement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian_des">
            Microsoft isn’t talking about its big Windows plans at Build 2021
            this week, and that’s because the company is preparing to detail
            what’s next for its PC operating system separately. Microsoft CEO
            Satya Nadella teased this announcement during his Build keynote this
            morning, revealing he has been testing “the next generation of
            Windows” in recent months.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ===========================> <=========================== */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="accordian_heding">
            Linkdin announcement
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordian_des">
            Microsoft isn’t talking about its big Windows plans at Build 2021
            this week, and that’s because the company is preparing to detail
            what’s next for its PC operating system separately. Microsoft CEO
            Satya Nadella teased this announcement during his Build keynote this
            morning, revealing he has been testing “the next generation of
            Windows” in recent months.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
