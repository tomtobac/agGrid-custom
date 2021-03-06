import React, { Component } from "react";
import "./App.scss";
import { AgGridReact } from "ag-grid-react";
import { columns, rows, total } from "./data";
import { GridReadyEvent, GridApi, ColumnApi, ValueFormatterParams } from "ag-grid-community";
import { CustomOverlayLoading } from "./components/overlayLoading";
import { Pagination } from "./components/pagination";
import { CustomPinnedRow } from './components/pinnedRow';

class App extends Component {
  api: GridApi | null | undefined = null;
  columnApi: ColumnApi | null | undefined = null;
  state = {
    columns,
    rows,
    total: [total],
    rowsPerPage: 50,
    page: 0
  };
  onGridReady = (params: GridReadyEvent) => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };
  handleLoadingButton = () => {
    if (this.api) {
      this.api.showLoadingOverlay();
    }
  };
  handleNoRowsButton = () => {
    this.setState({ rows: [] });
    if (this.api) {
      this.api.showNoRowsOverlay();
    }
  };
  handleHideOverlay = () => {
    this.setState({ rows });
    if (this.api) {
      this.api.hideOverlay();
    }
  };
  onChangeRowsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    this.setState({ rowsPerPage: value });
  };
  onAvPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  onRePage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { columns, rows, rowsPerPage, page, total }= this.state;
    const rowData = rows.slice(page * rowsPerPage, rowsPerPage * (page + 1));
    return (
      <div className="container">
        <div className="buttons">
          <button onClick={this.handleNoRowsButton}>No rows</button>
          <button onClick={this.handleLoadingButton}>Loading</button>
          <button onClick={this.handleHideOverlay}>Hide Overlay</button>
        </div>
        <div className="ag-theme-balham" style={{ height: 400 }}>
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pinnedBottomRowData={total}
            defaultColDef={{
              sortable: true,
              valueFormatter: formatValue,
              pinnedRowCellRenderer: "customPinnedRowRenderer"
            }}
            headerHeight={44}
            pagination={true}
            suppressPaginationPanel={true}
            rowSelection="multiple"
            onGridReady={this.onGridReady}
            frameworkComponents={{
              customLoadingOverlay: CustomOverlayLoading,
              customPinnedRowRenderer: CustomPinnedRow
            }}
            loadingOverlayComponent="customLoadingOverlay"
          />
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            rowsLength={rows.length}
            onChangeRowsPerPage={this.onChangeRowsPerPage}
            onAvPage={this.onAvPage}
            onRePage={this.onRePage}
          />
        </div>
      </div>
    );
  }
}

export default App;


const formatValue = (params: ValueFormatterParams) => {
    // Row => params.data
    // Column => params.column.colDef
    console.log(params);
    const { wrapper } = params.colDef as any;
    const { value } = params;
    if (wrapper) {
      if (value === undefined) {
        return '';
      }
      switch (wrapper) {
        case '€':
          return value.toLocaleString('eu', { style: 'currency', currency: 'EUR' });
        case '%':
          return value.toLocaleString('eu', {
            style: 'percent',
            maximumSignificantDigits: 4
          });
        default:
          if (!Number.isNaN(value)) {
            return value.toLocaleString('eu');
          }
          return value || '';
      }
    }
}