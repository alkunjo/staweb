import gql from "graphql-tag";

export const gqlEmitens = gql`
  query getEmitens($startDate: Date, $endDate: Date) {
    emitens(startDate: $startDate, endDate: $endDate) {
      id
      name
      code
      sector
      listingdate
      shares
      createdat
      updatedat
      eods {
        id
        tradingdate
        previous
        openprice
        firsttrade
        high
        low
        close
        change
        volume
        value
        frequency
        indexindividual
        offer
        offervolume
        bid
        bidvolume
        listedshares
        tradebleshares
        weightforindex
        foreignsell
        foreignbuy
        delistingdate
        nonregularvolume
        nonregularvalue
        nonregularfrequency
        persen
        percentage
        createdat
        updatedat
        emitenid
      }
    }
  }
`;

export const gqlEmiten = gql`
  query getEmiten($id: Int, $code: String, $startDate: Date, $endDate: Date) {
    emiten(id: $id, code: $code, startDate: $startDate, endDate: $endDate) {
      id
      name
      code
      sector
      listingdate
      shares
      createdat
      updatedat
      eods {
        id
        tradingdate
        previous
        openprice
        firsttrade
        high
        low
        close
        change
        volume
        value
        frequency
        indexindividual
        offer
        offervolume
        bid
        bidvolume
        listedshares
        tradebleshares
        weightforindex
        foreignsell
        foreignbuy
        delistingdate
        nonregularvolume
        nonregularvalue
        nonregularfrequency
        persen
        percentage
        createdat
        updatedat
        emitenid
      }
    }
  }
`;
