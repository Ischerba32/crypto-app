import { DetailedHTMLProps, TableHTMLAttributes, ReactNode } from 'react';

export interface TableBodyProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>  {
  children: ReactNode;
}