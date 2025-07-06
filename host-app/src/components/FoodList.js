import React, { useState, useEffect, lazy, Suspense } from "react";
const CardDetils = lazy(() => import("CardDetail/CardDetails"));
const CardShort = lazy(() => import("CardShort/CardShort"));

const FoodList = ({ callback }) => {
  const [shortItems, setShortItems] = useState([]);
  const [detailItems, setDetailItems] = useState([]);

  const callbackParent = (result) => {
    console.log(result);
    callback(result);
  };

  useEffect(() => {
    const fetchShortItems = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/recipes?limit=8&skip=10&select=id,name,image"
        );
        const data = await res.json();
        setShortItems(data.recipes);
      } catch (err) {
        console.error("Failed to fetch short items:", err);
      }
    };
    fetchShortItems();
  }, []);

  useEffect(() => {
    const fetchDetailsItems = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/recipes?limit=7&select=id,name,image,cuisine,rating"
        );
        const data = await res.json();
        setDetailItems(data.recipes);
      } catch (err) {
        console.error("Failed to fetch short items:", err);
      }
    };
    fetchDetailsItems();
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
              return (
                <CardDetils
                  key={item.id}
                  data={item}
                  callback={callbackParent}
                ></CardDetils>
              );
            })}
        </Suspense>
      </div>
    </>
  );
};

export default FoodList;
