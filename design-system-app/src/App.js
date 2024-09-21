import TableComponent from "./components/table/TableComponent";
import amazonData from "./data/leetcode_amazon_interview_Qs_mixed.json";
import "./App.css";

function App() {
  const columns = ["title", "difficulty", "paid only", "frequency"];
  return <TableComponent data={amazonData.questions} columns={columns} />;
}

export default App;
