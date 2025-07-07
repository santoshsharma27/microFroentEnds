import React, { useState, useEffect, lazy, Suspense } from "react";
const CardDetails = React.lazy(() => import("cardDetails/CardDetails"));

const FoodList = (props) => {
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating"
    )
      .then((res) => res.json())
      .then((data) => setDetailItems(data.recipes));
  }, []);

  return (
    <div className="detail-list-container">
      <Suspense fallback={<p>Loading...</p>}>
        {detailItems.length &&
          detailItems.map((item) => {
            return <CardDetails key={item.id} data={item}></CardDetails>;
          })}
      </Suspense>
    </div>
  );
};

export default FoodList;
