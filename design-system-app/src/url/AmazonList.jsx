import TableComponent from "../components/table/TableComponent";
import ProgressBar from "../components/progress-bar/ProgressBar";
import amazonData from "../data/leetcode_amazon_interview_Qs_mixed.json";

function AmazonList() {
  const columns = ["title", "difficulty", "fees", "frequency"];
  const renderers = {
    title: (item) => item.title,
    difficulty: (item) => item.difficulty,
    fees: (item) => (item.paidOnly ? "Premium" : "Free"),
    frequency: (item) => <ProgressBar value={item.freqBar} />,
  };
  return (
    <TableComponent
      columns={columns}
      data={amazonData.questions}
      renderers={renderers}
    />
  );
}
export default AmazonList;
