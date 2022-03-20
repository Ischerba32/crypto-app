import { CoinProps } from './Coin.props';
import styles from './Coin.module.scss';
import { numFormat } from '../../helpers/numberHelper';
import cn from 'classnames';

export const Coin = ({coin, className, ...props}: CoinProps): JSX.Element => {
  return (
    <tr className={cn(className, styles.coin)} {...props}>
      <td><span>{coin.rank}</span></td>
      <td className={styles.coin__name}>
        <span>{coin.name}</span>
      </td>
      <td>
        <span>${numFormat(+coin.priceUsd)}</span>
      </td>
      <td>
        <span>${numFormat(+coin.marketCapUsd)}</span>
      </td>
      <td>
        <span>${numFormat(+coin.vwap24Hr)}</span>
      </td>
      <td>
        <span>${numFormat(+coin.supply)}</span>
      </td>
      <td>
        <span>${numFormat(+coin.volumeUsd24Hr)}</span>
      </td>
      <td>
        <span
          className={cn({
            [styles.coin__percent_positive]: +coin.changePercent24Hr > 0,
            [styles.coin__percent_negative]: +coin.changePercent24Hr < 0,
          })}
        >
        {(+(coin.changePercent24Hr)).toFixed(2)}%
        </span>
      </td>
    </tr>
  );
};
