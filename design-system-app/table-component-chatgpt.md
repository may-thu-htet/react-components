To create a versatile, customizable, and reusable React table component from scratch without any external libraries, we'll build the following features:

1. **Customizable headers**: You can select which keys from the data should be used as headers.
2. **Sorting**: We'll allow sorting on specific headers.
3. **Search**: A basic search functionality that filters table rows based on user input.
4. **Manual CSS (Material Design-inspired)**: We'll write the CSS manually, following Material Design guidelines like spacing, font sizes, shadows, etc.

Here's how we can implement this step-by-step:

### 1. Table Component

We'll create a generic `Table` component that accepts props like:

- `data`: The table's data (array of objects).
- `columns`: An array defining which keys from the data should be used as headers.
- `sortableColumns`: An array defining which columns are sortable.
- `sortFunction`: A function to define custom sorting logic.

### Code: `Table.js`

```jsx
import React, { useState, useEffect } from "react";
import "./Table.css"; // We'll create a CSS file

// Table Component
const Table = ({ data, columns, sortableColumns, sortFunction }) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  // Handle sorting logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      const sortValue = sortFunction
        ? sortFunction(a[key], b[key])
        : a[key] > b[key]
        ? 1
        : -1;
      return direction === "asc" ? sortValue : -sortValue;
    });
    setTableData(sortedData);
  };

  // Handle search filter
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    const filteredData = data.filter((row) =>
      columns.some(
        (col) => row[col] && row[col].toString().toLowerCase().includes(value)
      )
    );
    setTableData(filteredData);
  };

  return (
    <div className="table-container">
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-input"
      />

      {/* Table */}
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                onClick={() => sortableColumns.includes(col) && handleSort(col)}
                className={sortableColumns.includes(col) ? "sortable" : ""}
              >
                {col.toUpperCase()}
                {sortableColumns.includes(col) && (
                  <span>
                    {sortConfig.key === col
                      ? sortConfig.direction === "asc"
                        ? " 🔼"
                        : " 🔽"
                      : ""}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
```

### 2. CSS: `Table.css`

Now, we'll write some CSS inspired by Material Design guidelines to give it a clean, modern look.

```css
/* Basic Material Design-inspired table styling */
.table-container {
  width: 100%;
  margin: 20px 0;
}

.search-input {
  width: 300px;
  padding: 8px 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.custom-table th,
.custom-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.custom-table th {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}

.custom-table tr:hover {
  background-color: #f0f0f0;
}

.sortable:hover {
  background-color: #e0e0e0;
}

.sortable span {
  margin-left: 8px;
}
```

### 3. Example Usage

Now, you can use the `Table` component in your React project with any dataset.

#### Example Data

```jsx
const data = [
  {
    frontendQuestionId: "1",
    title: "Two Sum",
    difficulty: "Easy",
    acRate: 53.42,
    topicTags: ["Array", "Hash Table"],
  },
  {
    frontendQuestionId: "2",
    title: "Add Two Numbers",
    difficulty: "Medium",
    acRate: 38.89,
    topicTags: ["Linked List", "Math"],
  },
  {
    frontendQuestionId: "3",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    acRate: 30.32,
    topicTags: ["String", "Sliding Window"],
  },
];
```

#### Example App Component

```jsx
import React from "react";
import Table from "./Table"; // import the Table component

const App = () => {
  // Define columns that you want to display
  const columns = ["frontendQuestionId", "title", "difficulty", "acRate"];

  // Define sortable columns
  const sortableColumns = ["frontendQuestionId", "acRate"];

  // Define a sort function (optional)
  const sortFunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    return a.toString().localeCompare(b.toString());
  };

  return (
    <div className="App">
      <h1>Questions Table</h1>
      <Table
        data={data}
        columns={columns}
        sortableColumns={sortableColumns}
        sortFunction={sortFunction}
      />
    </div>
  );
};

export default App;
```

### Key Points

1. **Customizable Columns**: You can pass different `columns` arrays to display different keys from your data.
2. **Sortable Columns**: Define which columns can be sorted using the `sortableColumns` prop.
3. **Searchable**: The search functionality is built into the table, filtering rows based on user input.
4. **Manual Sorting**: The `sortFunction` provides flexibility for sorting based on column type (e.g., numbers or strings).

### How it Works

- The table accepts data and displays columns according to the `columns` prop.
- Sorting is handled by clicking on sortable column headers, with the sorting state managed by `sortConfig`.
- The table automatically filters rows based on the search query.
- The `Table.css` file provides a clean, Material Design-inspired look.

### Next Steps

This table component can be expanded with additional features such as pagination, row selection, or actions, depending on your requirements.
