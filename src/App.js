import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>La ruta no existe</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
