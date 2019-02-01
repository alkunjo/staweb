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
  let open;
  if (eod.openprice !== 0) open = eod.openprice;
  else if (eod.firsttrade !== 0) open = eod.firsttrade;
  else open = eod.close - eod.change;

  if (eod.change < 0 && open > eod.high) open = eod.high;
  else if (eod.change > 0 && open < eod.low) open = eod.low;
  return open;
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
