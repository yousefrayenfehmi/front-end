// src/DataTable.js

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.css';

const DataTable = ({ data }) => {
  useEffect(() => {
    const table = $('#dataTable').DataTable();

    // Cleanup to destroy the DataTable instance when the component unmounts
    return () => {
      table.destroy(true);
    };
  }, []);

  return (
    <div>
      <table id="dataTable" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
