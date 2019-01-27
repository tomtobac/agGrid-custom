import React from "react";
import './pagination.scss';

export const Pagination: React.StatelessComponent<{
  page: number;
  rowsPerPage: number;
  rowsLength: number;
  onChangeRowsPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onAvPage: () => void;
  onRePage: () => void;
}> = ({
  page,
  rowsPerPage,
  rowsLength,
  onChangeRowsPerPage,
  onAvPage,
  onRePage
}) => {
  return (
    <div className="custom-pagination">
      <label>
        Rows per page:
        <select value={rowsPerPage} onChange={onChangeRowsPerPage}>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <span>
        {page * rowsPerPage + 1}-{rowsPerPage * (page + 1)} of {rowsLength}
      </span>
      <button type="button" onClick={onRePage}>
        ⬅
      </button>
      <button type="button" onClick={onAvPage}>
        ➡
      </button>
    </div>
  );
};
