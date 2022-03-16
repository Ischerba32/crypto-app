import { DetailedHTMLProps, TableHTMLAttributes, ReactNode } from 'react';

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>  {
  children: ReactNode;
}