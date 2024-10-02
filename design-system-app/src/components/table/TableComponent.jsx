import React from "react";

function TableComponent({ columns, data, renderers }) {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row-header">
          {columns.map((col) => (
            <th key={col} className="table-header-cell">
              {col.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="table-row-body">
            {columns.map((col) => {
              return (
                <td className="table-body-cell" key={col}>
                  {renderers[col] ? renderers[col](item) : item[col] || ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableComponent;
