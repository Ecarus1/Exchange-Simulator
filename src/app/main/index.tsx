import React from 'react';
import Tickers from '../../containers/tickers';

function Main(): JSX.Element {
  return (
    <Tickers/>
  );
}

export default React.memo(Main);