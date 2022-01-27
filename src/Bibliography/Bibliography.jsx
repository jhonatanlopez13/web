import './Bibliography.scss'
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import DATA from './data';
import { makeStyles } from '@material-ui/core/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}


const useStyles = makeStyles((theme) => ({
  containerTitle:{
      fontSize:"30px",
  },
  root: {
  flexGrow: 1, 
  display: 'flex',
  height: '100%',
  width:'100%',
},
tabs: {
  borderRight: `1px solid ${theme.palette.divider}`,
  width:"858px",
  height:"100%",  
},
infoTap:{
  width:"100%",
  height:"100%",
  display:"block",
  background:"red"
},
}));
export default function Bibliography() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container relative>
      <Grid item md={12}>
        <Box>
          <div className={"containertabs"}>
            <Grid item md={2}>
              <Tabs
                className={"tabslist"}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                orientation="vertical"
              >

                {DATA.map((item, index) => {

                  return (<Tab key={item.id} label={item.title} {...a11yProps(index)} />)
                })}

              </Tabs>
            </Grid>
            <Grid item lg="8" md="7"> 
              <SwipeableViews
                className={"tabscontent"}
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {DATA.map((item) => {
                  return (
                    <TabPanel key={item.id} value={value} index={value} dir={theme.direction}>
                      <Grid container spacing={2}>
                        <Grid item md={8}>
                          <p className="textBio">
                            {item.biography}
                          </p>
                        </Grid>
                        <Grid item md={3}>
                          <img alt={item.title} className={"foto"} src={item.img}></img>
                        </Grid>
                      </Grid>
                    </TabPanel>)
                })}

              </SwipeableViews>
            </Grid>
          </div>
        </Box>
      </Grid>
    </Container>
  );
}
