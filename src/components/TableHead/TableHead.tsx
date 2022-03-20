import React from 'react';
import { TableHeadProps } from './TableHead.props';

const TableHead = ({...props}: TableHeadProps) => {
  const headArr = ["Rank", "Name", "Price", "Market Cap", "VWAP (24Hr)", "Supply", "Volume (24Hr)", "Change (24Hr)"];

  return (
    <thead {...props}>
      <tr>
      {headArr && headArr.map(head => (
          <th key={head}>{head}</th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHead;
