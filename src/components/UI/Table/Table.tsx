import { TableProps } from "./Table.props";
import styles from './Table.module.scss';
import cn from 'classnames';
import TableHead from "../../TableHead/TableHead";
import TableBody from "../../TableBody/TableBody";

export const Table = ({ children, className, ...props }: TableProps): JSX.Element => {

  return (
    <table
      className={cn(styles.table, className)}
      {...props}
      >
      <TableHead className={styles.table__head} />
      <TableBody className={styles.table__body}>
        {children}
      </TableBody>
    </table>
  );
};

