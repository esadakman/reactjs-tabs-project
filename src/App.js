import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const API_URL = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  fetchData();

  return (
    <div>
      <FaAngleDoubleRight />
    </div>
  );
};

export default App;
