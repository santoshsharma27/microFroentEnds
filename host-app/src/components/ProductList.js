import React, { lazy, Suspense } from "react";
const ToDoApp = React.lazy(() => import("ToDoApp/App"));

const ProductList = ({ cart }) => {
  return (
    <div className="todo-list-container">
      <Suspense fallback={<div>Loading ToDo App...</div>}>
        <ToDoApp title="Product List" cart={cart} />
      </Suspense>
    </div>
  );
};

export default ProductList;
