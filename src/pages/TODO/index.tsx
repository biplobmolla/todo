import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import TodoBody from "../../components/TodoBody";
import axios from "axios";

function TODO() {
  const [data, setData] = useState<any>([]);
  const [selectedTab, setSelectedTab] = useState("Daily");
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const plainOptions: any = [];

  useEffect(() => {
    async function fetchTask() {
      const datas = await axios.get(`/get/tasks/${selectedTab}`);
      const result = datas?.data;
      setData(result);
    }
    fetchTask();
  }, []);
  for (let i = 0; i < data.length; i++) {
    plainOptions.push(data[i]?.label);
  }

  useEffect(() => {
    async function fetchTask() {
      const datas = await axios.get(`/get/tasks/${selectedTab}`);
      const result = datas?.data;
      setData(result);
    }
    fetchTask();
  }, [selectedTab]);

  return (
    <div className="w-9/12 mx-auto bg-gray-500">
      <Navigation
        datas={["Daily", "Weekly", "Monthly", "Yearly"]}
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoBody
        plainOptions={plainOptions}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </div>
  );
}

export default TODO;
