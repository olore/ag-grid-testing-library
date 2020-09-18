import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = () => {
  const rowData = () => [
    { make: "Toyota", model: "Celica", price: 35000, color: "blue" },
    { make: "Ford", model: "Mondeo", price: 32000, color: "red" },
    { make: "Porsche", model: "Boxter", price: 72000, color: "black" }
  ];

  // It seems only the first 2 cols are findable
  // no matter how I change the fields, looking for the 3rd/4th in a test fails
  const columnDefs = [{
    field: "model"        // This field is findable
  }, {
    field: "price"        // This field is findable
  }, {
    field: "make"         // This field is NOT findable
  // }, {
  //   field: "color"        // This field is NOT findable
  }];

  return (

    <div className="ag-theme-alpine" style={{ height: '300px', width: '800px' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData()}
        pagination={true}
      >
      </AgGridReact>
    </div>
  );
};

export default GridExample;

