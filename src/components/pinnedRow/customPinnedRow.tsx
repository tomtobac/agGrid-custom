import React from 'react'
import { ICellRendererParams } from 'ag-grid-community';
import './customPinnedRow.scss';

export const CustomPinnedRow: React.StatelessComponent<ICellRendererParams> = ({ value }) => {
  return (
    <span className="c-custom-pinned-row">{value}</span>
  );
}