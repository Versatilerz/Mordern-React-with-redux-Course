import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-400", score: 1 },
    { name: "Lime", color: "bg-green-300", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit: any) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit: any) => <div className={`p-2 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit: any) => fruit.score,
    },
  ];

  const keyFn = (fruit: any) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
