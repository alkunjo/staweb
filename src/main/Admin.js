import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import SearchIcon from "@material-ui/icons/Search";
import { Switch, Redirect, Route, NavLink } from "react-router-dom";
import { theme, styles } from "../components/theme";

import Dashboard from "./Dashboard";
import Charting from "./Charting";
import Screener from "./Screener";
import { openLoader } from "../action";
class Admin extends React.Component {
  state = {
    open: true,
    title: Dashboard
  };

  componentDidMount() {
    const { openLoader } = this.props;
    openLoader();
    this.setTitle("Dasboard");
  }

  setTitle = str => {
    this.setState({ title: str });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, match, showloader, openLoader } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {showloader && (
          <div className={classes.loading}>
            <div className={classes.loadingCenter}>
              <CircularProgress
                className={classes.preloader}
                size={50}
                color="primary"
              />
              <Typography variant="body1" className={classes.textLoading}>
                Waiting
              </Typography>
            </div>
          </div>
        )}
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="title"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              )
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem
                button
                component={NavLink}
                to="/dashboard"
                onClick={() => {
                  openLoader();
                  this.setTitle(match);
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/charting"
                onClick={() => {
                  openLoader();
                  this.setTitle(match);
                }}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary="Charting" />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/screener"
                onClick={() => {
                  openLoader();
                  this.setTitle(match);
                }}
              >
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Screener" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Redirect exact path={`${match.path}`} to="/dashboard" />
              <Route
                exact
                path={`${match.path}dashboard`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${match.path}charting`}
                component={Charting}
              />
              <Route
                exact
                path={`${match.path}screener`}
                component={Screener}
              />
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  showloader: state.appetyReducer.showloader
});

const mapDispatchToProps = dispatch => ({
  openLoader: () => dispatch(openLoader())
});

const compo = withStyles(styles)(Admin);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compo);
