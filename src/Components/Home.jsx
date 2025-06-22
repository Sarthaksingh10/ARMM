import { useNavigate } from "react-router";
import Button from "./Button";

export default function Home() {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/additem");
  };
  return (
    <div>
      {" "}
      <nav className="flex justify-between">
        <h1 className="font-serif font-semibold text-[30px] m-[12px] text-black">
          🛒 Item Manager
        </h1>
        <span className="w-[300px] flex m-[4px] ">
          <Button onclick={() => navigate("/viewitem")}>View Items</Button>
          <Button onclick={handleAddButtonClick}>Add Item</Button>
        </span>
      </nav>
      <div className=" max-w-xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
        <p className="text-2xl font-semibold mb-4">Internship Assignment</p>

        <details className="mb-4 border rounded-lg p-4 open:bg-gray-100 transition-all duration-300">
          <summary className="cursor-pointer text-lg font-medium">
            View Item
          </summary>
          <p className="mt-2 text-gray-700">
            Displaying all the items added in the backend.
          </p>
        </details>

        <details className="border rounded-lg p-4 open:bg-gray-100 transition-all duration-300">
          <summary className="cursor-pointer text-lg font-medium">
            Add Item
          </summary>
          <p className="mt-2 text-gray-700">
            Add a new item by providing the item information.
          </p>
        </details>
      </div>
    </div>
  );
}
