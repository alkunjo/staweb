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

const reformatInput = (eods, len) => {
  const newInput = eods.slice(Math.max(eods.length - len));
  return {
    open: newInput.map(z => checkUntraded(z)),
    high: newInput.map(z => z.high),
    close: newInput.map(z => z.close),
    low: newInput.map(z => z.low)
  };
};

const isabandonedbaby = eods => abandonedbaby(reformatInput(eods, 3));
const isdownsidetasukigap = eods => downsidetasukigap(reformatInput(eods, 3));
const iseveningdojistar = eods => eveningdojistar(reformatInput(eods, 3));
const iseveningstar = eods => eveningstar(reformatInput(eods, 3));
const ismorningdojistar = eods => morningdojistar(reformatInput(eods, 3));
const ismorningstar = eods => morningstar(reformatInput(eods, 3));
const isthreeblackcrows = eods => threeblackcrows(reformatInput(eods, 3));
const isthreewhitesoldiers = eods => threewhitesoldiers(reformatInput(eods, 3));
const isbearishengulfingpattern = eods =>
  bearishengulfingpattern(reformatInput(eods, 2));
const isbullishengulfingpattern = eods =>
  bullishengulfingpattern(reformatInput(eods, 2));
const isdarkcloudcover = eods => darkcloudcover(reformatInput(eods, 2));
const isbullishharami = eods => bullishharami(reformatInput(eods, 2));
const isbullishharamicross = eods => bullishharamicross(reformatInput(eods, 2));
const isbearishharami = eods => bearishharami(reformatInput(eods, 2));
const isbearishharamicross = eods => bearishharamicross(reformatInput(eods, 2));
const isbullishmarubozu = eods => bullishmarubozu(reformatInput(eods, 2));
const isbearishmarubozu = eods => bearishmarubozu(reformatInput(eods, 2));
const ispiercingline = eods => piercingline(reformatInput(eods, 2));
const isdoji = eods => doji(reformatInput(eods, 1));
const isdragonflydoji = eods => dragonflydoji(reformatInput(eods, 1));
const isgravestonedoji = eods => gravestonedoji(reformatInput(eods, 1));
const isbullishspinningtop = eods => bullishspinningtop(reformatInput(eods, 1));
const isbearishspinningtop = eods => bearishspinningtop(reformatInput(eods, 1));
const isbullishhammerstick = eods => bullishhammerstick(reformatInput(eods, 1));
const isbearishhammerstick = eods => bearishhammerstick(reformatInput(eods, 1));
const isbullishinvertedhammerstick = eods =>
  bullishinvertedhammerstick(reformatInput(eods, 1));
const isbearishinvertedhammerstick = eods =>
  bearishinvertedhammerstick(reformatInput(eods, 1));

export const whichPattern = eods => {
  if (isabandonedbaby(eods)) return "Abandoned Baby";
  if (isdownsidetasukigap(eods)) return "Downside Tasuki Gap";
  if (iseveningdojistar(eods)) return "Evening Doji Star";
  if (iseveningstar(eods)) return "Evening Star";
  if (ismorningdojistar(eods)) return "Morning Doji Star";
  if (ismorningstar(eods)) return "Morning Star";
  if (isthreeblackcrows(eods)) return "Three Black Crows";
  if (isthreewhitesoldiers(eods)) return "Three White Soldiers";
  if (isbearishengulfingpattern(eods)) return "Bearish Engulfing";
  if (isbullishengulfingpattern(eods)) return "Bullish Engulfing";
  if (isdarkcloudcover(eods)) return "Dark Cloud Cover";
  if (isbullishharami(eods)) return "Bullish Harami";
  if (isbullishharamicross(eods)) return "Bullish Harami Cross";
  if (isbearishharami(eods)) return "Bearish Harami";
  if (isbearishharamicross(eods)) return "Bearish Harami Cross";
  if (isbullishmarubozu(eods)) return "Bullish Marubozu";
  if (isbearishmarubozu(eods)) return "Bearish Marubozu";
  if (ispiercingline(eods)) return "Piercing Line";
  if (isdoji(eods)) return "Doji";
  if (isdragonflydoji(eods)) return "Dragonfly Doji";
  if (isgravestonedoji(eods)) return "Grave Stone Doji";
  if (isbullishspinningtop(eods)) return "Bullish Spinning Top";
  if (isbearishspinningtop(eods)) return "Bearish Spinning Top";
  if (isbullishhammerstick(eods)) return "Bullish Hammer";
  if (isbearishhammerstick(eods)) return "Bearish Hammer";
  if (isbullishinvertedhammerstick(eods)) return "Bullish Inverted Hammer";
  if (isbearishinvertedhammerstick(eods)) return "Bearish Inverted Hammer";
  return "No Pattern";
};
