import { useState } from "react";
import Table from "./Table";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

const SortableTable = (props: any) => {
  const { config, data } = props;
  const [sortOder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const handleClick = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

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
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // only sort data if sortOrder && sortBy are not null
  // make a copy of data prop.
  // find the correct sortValue function and use it for sorting

  let sortedData = data;
  if (sortOder && sortBy) {
    const { sortValue } = config.find((column: any) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {sortOder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
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
