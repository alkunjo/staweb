import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../components/theme";
import { connect } from "react-redux";
import { closeLoader } from "../action";
const Dashboard = props => {
  const {closeLoader} = props;
  closeLoader();
  return <div>Dashboard</div>;
};
const mapDispatchToProps = dispatch => ({
  closeLoader: () => dispatch(closeLoader())
});

const compo = withStyles(styles)(Dashboard);

export default connect(
  null,
  mapDispatchToProps
)(compo);
