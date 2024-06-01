import { useState } from "react";

const useSort = (data: any, config: any) => {
  const [sortOder, setSortOrder] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<null | string>(null);

  const setSortColumn = (label: string) => {
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

  return { setSortColumn, sortBy, sortOder, sortedData };
};

export default useSort;
