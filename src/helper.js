const checkUntraded = eod => {
  if (eod.openprice !== 0) return eod.openprice;
  else if (eod.firsttrade !== 0) return eod.firsttrade;
  return eod.close;
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
