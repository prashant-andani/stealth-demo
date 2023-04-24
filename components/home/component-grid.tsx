"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  const [productName, setProductName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [recordAction, setRecordAction] = useState("add");

  const saveRecord = async () => {
    if (productName && totalPrice && quantity) {
      const record = { id: "", productName, totalPrice, quantity };
      // ...
      try {
        if (recordAction == "edit") {
          // add note id to note data
          // record["id"] = recordId;
          // send request to edit note
          let res = await fetch("/api/note", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record),
          });
          // update note
          const updateRecord = await res.json();
          console.log("Update successful", { updateRecord });
          // edit in notes list
          // setRecord({ record: updateRecord, type: "edit" });
        } else {
          // send create request with note data
          let res = await fetch("/api/record", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record),
          });

          const newRecord = await res.json();
          console.log("Create successful", { newRecord });
          // add to notes list (global context state)
          // setRecord({ record: newRecord, type: "add" });
        }
      } catch (e) {
        console.log("error caught", e);
      }
    }
  };

  return <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
    <div className="p-4">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" for="product-name">
        Product Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="product-name"
        type="text"
        placeholder="Enter product name"
      >
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" for="quantity">
        Quantity
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="quantity"
        type="number"
        placeholder="Enter quantity"
      >
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" for="total-price">
        Total Price
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="total-price"
        type="number"
        placeholder="Enter total price"
      >
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
</div>

    
  </div>;
}
