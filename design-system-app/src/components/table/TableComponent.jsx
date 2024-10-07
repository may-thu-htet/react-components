import React, { Fragment } from "react";
import "./table.css";
import SearchBar from "../search bar/SearchBar";

function TableComponent({ columns, data, renderers }) {
  const totalPb = data.length;
  return (
    <div className="table-wrapper">
      <SearchBar />
      <table className="table">
        <thead className="table-head">
          <tr className="table-row-header">
            {columns.map((col) => (
              <th key={col} className="table-header-cell">
                {col === "title"
                  ? `${col.toUpperCase() + " (" + totalPb + " problems)"} `
                  : col.toUpperCase()}
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
                    {col === "title"
                      ? `${index + 1}. ${item.title}`
                      : renderers[col]
                      ? renderers[col](item)
                      : item[col] || ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;
