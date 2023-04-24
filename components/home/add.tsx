"use client";

import { useState, useEffect } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function Add({onAddSuccess}) {
  const [openPopover, setOpenPopover] = useState(false);
  const [productName, setProductName] = useState("crocin");
  const [totalPrice, setTotalPrice] = useState(2);
  const [quantity, setQuantity] = useState(4);
  const [recordAction, setRecordAction] = useState("add");
  const [record, setRecord] = useState('');

  const saveRecord = async () => {
    if (productName && totalPrice && quantity) {
      const record = { id: "", productName, totalPrice: parseInt(totalPrice), quantity: parseInt(quantity) };
      // ...
      try {
        if (recordAction == "edit") {
          // add note id to note data
          // record["id"] = recordId;
          // send request to edit note
          let res = await fetch("/api/record", {
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
          // send create request with record data
          let res = await fetch("/api/record", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(record),
          });

          const newRecord = await res.json();
          onAddSuccess(newRecord.id);
          console.log("Create successful", { newRecord });
          // add to notes list (global context state)
          // setRecord({ record: newRecord, type: "add" });
        }
      } catch (e) {
        console.log("error caught", e);
      }
    }
  };

  return (
    <div className="p-4">
      <form className="px-8 pt-14">
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            for="product-name"
          >
            Product Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="product-name"
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" for="quantity">
            Quantity
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="quantity"
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            for="total-price"
          >
            Total Price
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="total-price"
            type="number"
            placeholder="Enter total price"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={saveRecord}
          >
            Submit
          </button>
         
        </div>
      </form>
    </div>
  );
}
