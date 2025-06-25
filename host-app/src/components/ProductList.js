import React, { lazy, Suspense } from "react";
const ToDoApp = React.lazy(() => import("ToDoApp/App"));

const ProductList = () => {
  return (
    <div className="todo-list-container">
      <Suspense fallback={null}>
        <ToDoApp />
      </Suspense>
    </div>
  );
};

export default ProductList;
