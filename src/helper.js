import {
  abandonedbaby,
  bearishengulfingpattern,
  bullishengulfingpattern,
  darkcloudcover,
  downsidetasukigap,
  doji,
  dragonflydoji,
  gravestonedoji,
  bullishharami,
  bearishharamicross,
  bullishharamicross,
  bullishmarubozu,
  bearishmarubozu,
  eveningdojistar,
  eveningstar,
  bearishharami,
  piercingline,
  bullishspinningtop,
  bearishspinningtop,
  morningdojistar,
  morningstar,
  threeblackcrows,
  threewhitesoldiers,
  bullishhammerstick,
  bearishhammerstick,
  bullishinvertedhammerstick,
  bearishinvertedhammerstick,
  hammerpattern,
  hammerpatternunconfirmed,
  hangingman,
  hangingmanunconfirmed,
  shootingstar,
  shootingstarunconfirmed,
  tweezerbottom,
  tweezertop
} from "technicalindicators";

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

const checkUntraded = eod => {
  if (eod.openprice !== 0) return eod.openprice;
  else if (eod.firsttrade !== 0) return eod.firsttrade;
  else return eod.close - eod.change;
};
export const eodParser = eods => {
  return eods.map(x => ({
    date: new Date(x.tradingdate),
    open: checkUntraded(x),
    high: x.high,
    low: x.low,
    close: x.close,
    volume: x.volume
  }));
};

export const isAbandonedBaby = eods => {
  const l3d = eods.slice(Math.max(eods.length - 3));

  const threeDayInput = {
    open: l3d.map(z => checkUntraded(z)),
    high: l3d.map(z => z.high),
    close: l3d.map(z => z.close),
    low: l3d.map(z => z.low)
  };
  return abandonedbaby(threeDayInput);
};
