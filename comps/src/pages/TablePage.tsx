import Table from "../components/Table";

const TablePage = () => {
  const config = [
    {
      label: "Fruits",
    },
    {
      label: "Fruits",
    },
    {
      label: "Fruits",
    },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-400", score: 1 },
    { name: "Lime", color: "bg-green-300", score: 4 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
