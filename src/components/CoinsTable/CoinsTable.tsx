import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Coin, Table } from '..';
import { CoinModel } from '../../interfaces/coin.interface';

const CoinsTable = () => {
  const [coins, setCoins] = useState<CoinModel[]>([]);

  const fetchCoins = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/assets`);
    setCoins(data.data);
  };

  useEffect(() =>{
    fetchCoins();
  }, []);

  return (
    <>
      <Table>
          {coins && coins.map(coin => (
            <Coin coin={coin} key={coin.rank} />
          ))}
      </Table>
    </>
  );
};

export default CoinsTable;
