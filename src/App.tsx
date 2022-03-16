import axios from "axios";
import { useEffect, useState } from "react";
import {Coin, Table} from "./components";
import CoinsTable from "./components/CoinsTable/CoinsTable";
import { CoinModel } from "./interfaces/coin.interface";


function App() {


  return (
    <>
      <CoinsTable />
    </>
  );
}

export default App;
