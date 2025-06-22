import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import toast from "react-hot-toast";

export default function AddItemForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("itemType", data.itemType);
    formData.append("itemDesc", data.itemDesc);
    formData.append("photo", data.photo[0]);
    for (let i = 0; i < data.additionalPhotos.length; i++) {
      formData.append("additionalPhotos", data.additionalPhotos[i]);
    }
    try {
      const response = await fetch("http://localhost:5000/api/additem", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("created successfully");
        toast.success("Item added Successfully ");
        navigate("/");
      }
    } catch (err) {
      console.log("Error creating employee" + err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto border border-gray-300 bg-white rounded-md shadow-md p-8">
      <div className="mb-6 w-full">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-2">
          Add New Item
        </h2>
        <p className="text-base text-gray-600">
          Fill the details and add a new item to your list.
        </p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
      >
        {/* Item Name */}
        <div>
          <label
            htmlFor="itemName"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            placeholder="e.g. Juventus Kit"
            {...register("itemName", {
              required: "This is the required field",
            })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.itemName?.message}
          </p>
        </div>

        {/* Item Type */}
        <div>
          <label
            htmlFor="itemType"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Item Type
          </label>
          <select
            id="itemType"
            name="itemType"
            {...register("itemType", {
              required: "please select the category",
            })}
            className="w-full rounded-md px-4 py-2.5 border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select type</option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Shoes</option>
            <option>Sports Gear</option>
            <option>Accessory</option>
          </select>
          <p className="text-red-500 text-sm mt-1">
            {errors.itemType?.message}
          </p>
        </div>

        {/* Item Description */}
        <div>
          <label
            htmlFor="itemDesc"
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Item Description
          </label>
          <textarea
            id="itemDesc"
            name="itemDesc"
            rows="3"
            {...register("itemDesc", {
              required: "Please write something about the product",
              maxLength: 250,
            })}
            placeholder="A few words about this item..."
            className="w-full rounded-md px-4 py-2.5 border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>
          <p className="text-red-500 text-sm mt-1">
            {errors.itemDesc?.message}
          </p>
        </div>

        {/* Upload Images */}
        <div>
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="photo"
          >
            Upload Images
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            {...register("photo", {
              required: {
                value: true,
                message: "Please Upload an image",
              },
            })}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <div id="images-preview" className="flex flex-wrap gap-2 mt-2"></div>
          <p className="text-red-500 text-sm mt-1">{errors.photo?.message}</p>
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="additionalPhotos"
          >
            Additional Images
          </label>
          <input
            type="file"
            name="additionalPhotos"
            multiple
            accept="image/*"
            {...register("additionalPhotos")}
            className="block w-full text-sm file:py-2 file:px-4 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <Button className={"w-full"}>Add Item</Button>
      </form>
    </div>
  );
}
