import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { styles } from "../components/theme";
import { ApolloConsumer } from "react-apollo";
import { gqlEmitens } from "../graphql";

import moment from "moment";
import Table from "../components/table";
import { connect } from "react-redux";
import { closeLoader } from "../action";

class Screener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const { closeLoader } = this.props;
    const {
      data: { emitens }
    } = await this.apolloClient.query({
      query: gqlEmitens,
      variables: {
        startDate: "2018-01-01",
        endDate: moment(new Date()).format("YYYY-MM-DD"),
        syariah: true
      }
    });
    const formattedTable = emitens.map(x => ({
      code: x.code,
      name: x.name,
      sector: x.sector,
      listingdate: x.listingdate,
      shares: x.shares,
      pattern: x.pattern //whichPattern(x.eods)
    }));
    const rows = [
      { id: "code", disablePadding: false, label: "Code" },
      { id: "name", disablePadding: false, label: "Name" },
      { id: "sector", disablePadding: false, label: "Sector" },
      { id: "shares", numeric: true, disablePadding: false, label: "Shares" },
      { id: "pattern", numeric: false, disablePadding: false, label: "Pattern" }
    ];
    this.setState({ emitens, formattedTable, rows });
    closeLoader();
  }
  render() {
    const { formattedTable, rows } = this.state;
    return (
      <Paper>
        <ApolloConsumer>
          {apolloClient => {
            this.apolloClient = apolloClient;
            return null;
          }}
        </ApolloConsumer>
        {formattedTable && <Table rows={rows} data={formattedTable} />}
      </Paper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  closeLoader: () => dispatch(closeLoader())
});

const compo = withStyles(styles)(Screener);

export default connect(
  null,
  mapDispatchToProps
)(compo);
