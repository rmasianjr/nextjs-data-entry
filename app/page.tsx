"use client";

import { localStorageUtil } from "./lib/localStorageUtil";
import { useState, useEffect } from "react";
import Card from "./components/general/Card";
import NoDataComponent from "./components/general/NoDataComponent";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const formDatas = localStorageUtil.getData("formData");
    setData(formDatas);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {data.length === 0 ? (
        <NoDataComponent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={`item_${index}`}>
              <Card details={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  // <div className="container mx-auto p-4">
  //     {data.length === 0 ? (
  //       <NoDataComponent />
  //     ) : (
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //         data.map((item, index) => (
  //           <div key={`item_${index}`}>
  //             <Card key={`item_${index}`} details={item} />
  //           </div>
  //         ))
  //       </div>
  //     )}
  // </div>
}
