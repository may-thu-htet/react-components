import React from "react";
function TableComponent({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col}>
                {item[col] !== undefined ? item[col].toString() : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableComponent;
