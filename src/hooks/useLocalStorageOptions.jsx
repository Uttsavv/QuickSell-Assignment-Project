import { useEffect, useState } from "react";

const useLocalStorageOptions = () => {
  const [groupingOption, setGroupingOption] = useState("");
  const [orderingOption, setOrderingOption] = useState("");

  useEffect(() => {
    const storedGroupingOption = localStorage.getItem("groupingOption");
    const storedOrderingOption = localStorage.getItem("orderingOption");

    if (storedGroupingOption) {
      setGroupingOption(storedGroupingOption);
    }

    if (storedOrderingOption) {
      setOrderingOption(storedOrderingOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
  }, [groupingOption]);

  useEffect(() => {
    localStorage.setItem("orderingOption", orderingOption);
  }, [orderingOption]);

  return {
    groupingOption,
    setGroupingOption,
    orderingOption,
    setOrderingOption,
  };
};

export default useLocalStorageOptions;
