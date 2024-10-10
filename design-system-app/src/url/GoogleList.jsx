import TableComponent from "../components/table/TableComponent";
import ProgressBar from "../components/progress-bar/ProgressBar";
import googleData from "../data/leetcode_google_interview_Qs_mixed.json";

function GoogleList() {
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
      data={googleData.questions}
      renderers={renderers}
    />
  );
}
export default GoogleList;
