import React from "react";

const ShoppingLists = () => {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => {
    return <li key={product.id}>{product.title}</li>;
  });

  return (
    <>
      <h3>Shopping Lists</h3>
      <ul>{listItems}</ul>
    </>
  );
};

export default ShoppingLists;
