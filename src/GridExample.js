import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridExample = () => {

  return (

    <div className="ag-theme-alpine" style={{ height: '300px', width: '800px' }}>
      <AgGridReact
        suppressColumnVirtualisation={process.env.NODE_ENV === "test"}
        columnDefs={
          [
            { field: "make" }, 
            { field: "model" }, 
            { field: "price" }, 
            { field: "color" },
          ]
        }
        rowData={
          [{ 
            make: "Toyota", 
            model: "Celica",
            price: "35000", 
            color: "blue" 
          }]
        }
        pagination={true}
      >
      </AgGridReact>
    </div >
  );
};

export default GridExample;

