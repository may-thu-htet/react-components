import React from "react";
import ProgressBar from "../progress-bar/ProgressBar";

function TableComponent({ data, columns }) {
  const columnMapping = {
    title: "title",
    difficulty: "difficulty",
    Fees: "paidOnly",
    frequency: "freqBar",
  };
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
            {columns.map((col) => {
              return (
                <td key={col}>
                  {col === "Fees" ? (
                    item[columnMapping[col]] ? (
                      "Premium"
                    ) : (
                      "Free"
                    )
                  ) : col === "frequency" ? (
                    <ProgressBar value={item[columnMapping[col]]} />
                  ) : item[columnMapping[col]] !== undefined ? (
                    item[columnMapping[col]].toString()
                  ) : (
                    ""
                  )}
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
