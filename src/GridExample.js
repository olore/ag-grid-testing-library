import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = () => {
    const rowData = () => [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    const columnDefs = [{
      cellRenderer: "agGroupCellRenderer",
      field: "make"
    }, {
      field: "model"
    }, {
      field: "price"
    }];

    return (

        <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData()}
                >
            </AgGridReact>
        </div>
    );
};

export default GridExample;

