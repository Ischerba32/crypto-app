import { CoinProps } from './Coin.props';
import styles from './Coin.module.scss';
import { numFormat } from '../../helpers/numberHelper';


export const Coin = ({coin, ...props}: CoinProps): JSX.Element => {
  return (
    <tr {...props}>
      <td>{coin.rank}</td>
      <td>{coin.name}</td>
      <td>${numFormat(+coin.priceUsd)}</td>
      <td>${numFormat(+coin.marketCapUsd)}</td>
      <td>${numFormat(+coin.vwap24Hr)}</td>
      <td>${numFormat(+coin.supply)}</td>
      <td>${numFormat(+coin.volumeUsd24Hr)}</td>
      <td>{(+(coin.changePercent24Hr)).toFixed(2)}%</td>
    </tr>
  );
};
