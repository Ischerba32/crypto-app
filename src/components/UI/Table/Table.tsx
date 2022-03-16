import { TableProps } from "./Table.props";
import styles from './Table.module.scss';

export const Table = ({ children, className, ...props }: TableProps): JSX.Element => {
  return (
    <table {...props}>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

