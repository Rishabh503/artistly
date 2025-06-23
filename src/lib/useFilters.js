import { useState, useMemo } from "react";

export function useFilters(data, keys = []) {
  const [filters, setFilters] = useState(
    Object.fromEntries([...keys, "search"].map((k) => [k, ""]))
  );

 
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        !filters.search ||
        item.name.toLowerCase().includes(filters.search.toLowerCase());

      return (
        matchesSearch &&
        keys.every(
          (key) => !filters[key] || item[key] === filters[key]
        )
      );
    });
  }, [filters, data, keys]);

  
  const getAvailableOptions = (key) => {
    const partialData = data.filter((item) => {
      return keys.every((k) => {
        if (k === key) return true; 
        return !filters[k] || item[k] === filters[k];
      });
    });
    return [...new Set(partialData.map((item) => item[key]))];
  };

  return {
    filters,
    setFilters,
    filteredData,
    getAvailableOptions,
  };
}
