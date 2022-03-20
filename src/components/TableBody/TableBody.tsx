import React from 'react';
import { TableBodyProps } from './TableBody.props';

const TableBody = ({children, ...props}: TableBodyProps) => {
  return (
    <tbody {...props}>
      {children}
    </tbody>
  );
};

export default TableBody;
