import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [apiData, setdata] = useState("");

  const apiCall = () => {
    const api = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h2>title is {apiData.title}</h2>
    </div>
  );
};

export default DataFetching;
