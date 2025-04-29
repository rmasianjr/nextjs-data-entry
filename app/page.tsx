"use client";

import { localStorageUtil } from "./lib/localStorageUtil";
import { useState, useEffect } from "react";
import Card from "./components/general/Card";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const formDatas = localStorageUtil.getData("formData");
    setData(formDatas);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={`item_${index}`}>
            <Card key={`item_${index}`} details={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
