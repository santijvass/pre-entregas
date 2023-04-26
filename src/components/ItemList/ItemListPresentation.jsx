import ItemCard from "./ItemCard";

const ItemListPresentation = ({ producto }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {producto.map((producto) => {
        return <ItemCard producto={producto} />;
      })}
    </div>
  );
};

export default ItemListPresentation;
