function filter(data, column, query) {
  return data.filter((item) => {
    return column.some((col) => {
      const columnValue = item[col];
      if (columnValue === "" || columnValue === undefined) {
        return false;
      }
      return columnValue.toString().toLowerCase().includes(query);
    });
  });
}

export default filter;
