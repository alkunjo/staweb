import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import {
  IconButton,
  ListItem,
  ListItemText,
  Typography
} from "../../node_modules/@material-ui/core";
import { Close } from "../../node_modules/@material-ui/icons";

class CandleStickChart extends React.Component {
  render() {
    const { width, data, code, ratio, deleteChart } = this.props;
    const xAccessor = d => d.date;
    const xExtents = [
      xAccessor(last(data)),
      xAccessor(data[data.length - 100])
    ];
    return (
      <Grid container spacing={8}>
        <Grid item container xs={12}>
          <ListItem>
            <ListItemText
              inset
              primary={
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{ display: "inline" }}
                  noWrap
                >
                  {code}
                </Typography>
              }
            />
            <IconButton onClick={() => deleteChart(code)}>
              <Close />
            </IconButton>
          </ListItem>
        </Grid>
        <Grid item container xs={12}>
          <ChartCanvas
            height={400}
            ratio={ratio}
            width={width}
            margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
            seriesName={code}
            data={data}
            xAccessor={xAccessor}
            xScale={scaleTime()}
            xExtents={xExtents}
          >
            <Chart id={1} yExtents={d => [d.high, d.low]}>
              <XAxis axisAt="bottom" orient="bottom" ticks={6} />
              <YAxis axisAt="left" orient="left" ticks={5} />
              <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
            </Chart>
            <Divider />
          </ChartCanvas>
        </Grid>
      </Grid>
    );
  }
}

CandleStickChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChart.defaultProps = {
  type: "svg"
};
CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;
