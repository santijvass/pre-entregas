import React from "react";
import ItemListPresentation from "./ItemListPresentation";

const ItemListContainer = () => {
  let saludar = "hola desde el ItemList";

  return (
    <div>
      <ItemListPresentation saludar={saludar} />
    </div>
  );
};

export default ItemListContainer;
