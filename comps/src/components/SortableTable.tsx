import Table from "./Table";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props: any) => {
  const { config, data } = props;
  const { setSortColumn, sortBy, sortOder, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label: any, sortBy: any, sortOrder: any) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <GoTriangleUp />;
  } else if (sortOrder === "dsc") {
    return <GoTriangleDown />;
  }
};

export default SortableTable;
