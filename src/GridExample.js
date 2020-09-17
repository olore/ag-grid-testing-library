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
      headerName: "Make",
      cellRenderer: "agGroupCellRenderer",
      field: "make"
    }, {
      headerName: "Model",
      field: "model"
    }, {
      headerName: "Price",
      field: "price"
    }];

    var gridOptions = {
      defaultColDef: {
        flex: 1,
      },
      masterDetail: true,
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: 'callId' },
            { field: 'direction' },
          ],
          defaultColDef: {
            flex: 1,
          },
        },
        getDetailRowData: function (params) {
          console.log(params);
          params.successCallback([{
            callId: "Foobar",
            direction: "North"
          }]);
        },
      },
    };

    return (

        <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData()}
                masterDetail={true}
                {...gridOptions}
                >
            </AgGridReact>
        </div>
    );
};

export default GridExample;
