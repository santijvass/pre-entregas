import React, { useState, useEffect } from "react";
import ItemListPresentation from "./ItemListPresentation";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => error);
  }, []);

  console.log(items);

  return (
    <div>
      <ItemListPresentation items={items} />
    </div>
  );
};

export default ItemListContainer;
