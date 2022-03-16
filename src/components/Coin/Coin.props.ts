import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import { CoinModel } from "../../interfaces/coin.interface";

export interface CoinProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  coin: CoinModel;
}