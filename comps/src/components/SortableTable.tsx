import { useState } from "react";
import Table from "./Table";

const SortableTable = (props: any) => {
  const { config } = props;
  const [sortOder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handleClick = (label: string) => {
    switch (sortOder) {
      case null:
        setSortBy(label);
        setSortOrder("asc");
        break;
      case "asc":
        setSortBy(label);
        setSortOrder("dsc");
        break;
      case "dsc":
        setSortBy(label);
        setSortOrder(null);
    }
  };

  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} is sortable
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
};
export default SortableTable;
