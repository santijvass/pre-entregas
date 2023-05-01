import ItemCard from "./ItemCard";

const ItemListPresentation = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemListPresentation;
