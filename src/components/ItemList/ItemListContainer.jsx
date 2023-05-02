import React, { useState, useEffect } from "react";
import ItemListPresentation from "./ItemListPresentation";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const productsFiltered = products.filter((prod) => prod.category === name);
    const tarea = new Promise((resolve, reject) => {
      resolve(name ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => error);
  }, [name]);

  console.log(items);

  return (
    <div>
      <ItemListPresentation items={items} />
    </div>
  );
};

export default ItemListContainer;
