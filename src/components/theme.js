import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";

import red from "@material-ui/core/colors/red";
const drawerWidth = 240;

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
    error: red,
    gray: "#aaaaaa"
  },
  typography: {
    fontSize: "16"
  }
});
export const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    flexGrow: 1
  },
  loading: {
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.85)",
    zIndex: "1300",
    position: "absolute",
    alignItems: "center",
    display: "flex"
  },
  loadingCenter: {
    width: "100vw",
    textAlign: "center"
  },
  preloader: {
    zIndex: "10000 !important",
    margin: theme.spacing.unit * 2,
    textAlign: "center"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  glabsSuggestion: {
    position: "absolute",
    width: "100%",
    zIndex: "8000",
    overflowY: "auto",
    maxHeight: "300px"
  },
  containerAutocomplete: {
    flexGrow: 1,
    position: "relative"
  },
  rootAutocomplete: {
    flexGrow: 1,
    maxHeight: 250
  },
  inputRootAutocomplete: {
    flexWrap: "wrap"
  },
  inputAutocomplete: {
    width: "auto",
    flexGrow: 1
  },
  glabInputField: {
    fontSize: "16px"
  },
  glabInputLabel: {
    fontSize: "16px"
  },
  listTextName: {
    marginBottom: "5px",
    fontSize: "17px",
    fontWeight: "bold"
  },
  listTextSecondaryDesc: {
    fontSize: "14px",
    color: "rgba(0,0,0,0.7)",
    width: "90%"
  }
});
// export default { styles, theme };
