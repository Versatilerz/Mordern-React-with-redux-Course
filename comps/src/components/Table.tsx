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
