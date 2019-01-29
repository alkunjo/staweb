import React from "react";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "../components/autocomplete";
import { withStyles } from "@material-ui/core/styles";
import dataEmitens from "../emitenfix.json";
import styles from "../components/theme";
import randomstring from "randomstring";
import { ApolloConsumer } from "react-apollo";
import { gqlEmiten } from "../graphql";
import moment from "moment";
// import CandleStickChart from "../components/candlestick";
// import CandleStickChart from "../components/candlestickmousepointer";
import CandleStickChart from "../components/candlestickdark";
import { eodParser } from "../helper";
class Charting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emitens: [],
      autoOptions: dataEmitens.map(x => ({ label: x.code, caption: x.name })),
      autoKey: randomstring.generate(4)
    };
  }

  selectedChange = async val => {
    const { emitens } = this.state;
    const {
      data: { emiten }
    } = await this.apolloClient.query({
      query: gqlEmiten,
      variables: {
        code: val,
        startDate: "2016-01-01",
        endDate: moment(new Date()).format("YYYY-MM-DD")
      }
    });
    console.log("emiten.eods: ", emiten.eods);
    const newEmitens = [...emitens];
    newEmitens.push(emiten);
    this.setState({
      emitens: newEmitens,
      autoKey: randomstring.generate(3)
    });
  };

  render() {
    const { classes } = this.props;
    const { autoOptions, autoKey, emitens } = this.state;
    return (
      <div>
        <ApolloConsumer>
          {apolloClient => {
            this.apolloClient = apolloClient;
            return null;
          }}
        </ApolloConsumer>
        <Paper style={{ padding: "15px" }}>
          <Autocomplete
            autoFocus
            key={autoKey}
            options={autoOptions}
            classes={classes}
            onSelect={this.selectedChange}
          />
        </Paper>

        {emitens.map(x => (
          <Paper key={x.code} style={{ padding: "15px", marginTop: "10px" }}>
            <CandleStickChart code={x.code} data={eodParser(x.eods)} />
          </Paper>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Charting);
