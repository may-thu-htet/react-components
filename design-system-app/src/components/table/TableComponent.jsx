import React, { useState } from "react";
import "./table.css";
import SearchBar from "../search bar/SearchBar";

function TableComponent({ columns, data, renderers }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function handleSearch() {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredData = data.filter((item) => {
      return columns.some((col) => {
        return (
          item[col] &&
          item[col].toString().toLowerCase().includes(lowerCaseQuery)
        );
      });
    });
    setFilteredData(newFilteredData);
  }

  const totalPb = filteredData.length;
  return (
    <div className="table-wrapper">
      <SearchBar
        userInput={searchQuery}
        setUserInput={setSearchQuery}
        onSearch={handleSearch}
      />
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
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
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
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No result found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;
