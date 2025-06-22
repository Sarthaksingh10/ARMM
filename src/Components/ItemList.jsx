import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Modal from "./Modal";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function ItemList() {
  const [itemList, setItemList] = useState([]); //fetching data creating array of all items in backend
  const [selectedItem, setSelectedItem] = useState(null); //state for modal window
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllItems() {
      try {
        const response = await fetch("http://localhost:5000/api/getitems");
        const data = await response.json();

        if (response.ok) {
          console.log("successfully listed");
          setItemList(data.products);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error getting all employee" + error);
      }
    }
    getAllItems();
  }, []);

  return (
    <>
      {/* If no items button with start adding option otherwise all the items will be displayed */}
      {itemList.length === 0 ? (
        <div className=" flex justify-center items-center rounded-md">
          <Button onclick={() => navigate("/additem")}>Start Adding +</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {itemList.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}

          <div className=" flex justify-center items-center rounded-md">
            <Button onclick={() => navigate("/additem")}>Add More +</Button>
          </div>
        </div>
      )}

      {/* Handling modal window */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
