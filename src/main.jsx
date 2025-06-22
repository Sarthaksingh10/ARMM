import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AddItemForm from "./Components/AddItemForm.jsx";
import ItemList from "./Components/ItemList.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/additem" element={<AddItemForm />} />
      <Route path="/viewitem" element={<ItemList />} />
    </Routes>
  </BrowserRouter>
);
