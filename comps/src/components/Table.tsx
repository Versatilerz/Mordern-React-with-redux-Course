export type TableProps = {
  name: string;
  color: string;
  score: number;
}[];

export type TableConfig = {
  label: string;
  render: any;
}[];

const Table: React.FC<{
  data: TableProps;
  config: TableConfig;
  keyFn: any;
}> = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2"></tr>
        {renderedHeaders}
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

//data sorting:
// numbers:
// data.sort((a, b) => {
//   return a-b;
// });
//
// strings (alphabatical):
// data.sort((a,b) => {
// return a.localeCompare(b);
// });
//
// objects (Transofrm 1 value of the objects and sort on that):
// Examples:
// const data = [
//   { name: "Orange", cost: 1, score: 5 },
//   { name: "Apple", cost: 5, score: 3 },
//   { name: "Banana", cost: 13, score: 1 },
//   { name: "Lime", cost: 2, score: 4 },
// ];

// const getSortValue = (fruit) => {
//   return fruit.score;
// };

// // filter object string or number
// data.sort((a, b) => {
//   const valueA = getSortValue(a);
//   const valueB = getSortValue(b);
//   if (typeof valueA === "string") {
//     return valueA.localeCompare(valueB);
//   } else {
//     return valueA - valueB;
//   }
// });
