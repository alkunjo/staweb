import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";
import { eodParser } from "../helper";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import { Button } from "../../node_modules/@material-ui/core";

class CandleStickChart extends React.Component {
  render() {
    const { type, width, data, ratio, deleteChart } = this.props;
    const { code, eods } = data;
    const parsedEods = eodParser(eods);
    const xAccessor = d => d.date;
    const xExtents = [
      xAccessor(last(parsedEods)),
      xAccessor(parsedEods[parsedEods.length - 100])
    ];
    return (
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        seriesName={code}
        data={parsedEods}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >
        <div>
          <h4>{code}</h4>
          <Button
            // className={classnames(classes.glabsBtn, classes.glabsButtonOrange)}
            // style={{ zIndex: '10000' }}
            onClick={() => deleteChart(code)}
          >
            Upload
          </Button>
        </div>
        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
        <Divider />
      </ChartCanvas>
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
