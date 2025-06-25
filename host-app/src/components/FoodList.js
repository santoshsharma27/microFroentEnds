import React, { useState, useEffect, lazy, Suspense } from "react";
const CardDeatils = lazy(() => import("DetailCard/CardDetails"));
const CardShort = lazy(() => import("ShortCard/CardShort"));

const FoodList = () => {
  const [shortItems, setShortItems] = useState([]);
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=5&skip=10&select=id,name,image")
      .then((res) => res.json())
      .then((data) => setShortItems(data.recipes));
  }, []);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/recipes?limit=5&select=id,name,image,cuisine,rating"
    )
      .then((res) => res.json())
      .then((data) => setDetailItems(data.recipes));
  }, []);

  return (
    <>
      <div className="short-list-container">
        <Suspense fallback={<p>Loading...</p>}>
          {shortItems.length > 0 &&
            shortItems.map((item) => {
              return <CardShort key={item.id} data={item}></CardShort>;
            })}
        </Suspense>
      </div>
      <div className="detail-list-container">
        <Suspense fallback={<p>Loading...</p>}>
          {detailItems.length > 0 &&
            detailItems.map((item) => {
              return <CardDeatils key={item.id} data={item}></CardDeatils>;
            })}
        </Suspense>
      </div>
    </>
  );
};

export default FoodList;
