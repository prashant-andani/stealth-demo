"use client";

import React, { useState } from "react";

interface Props {
  onAddSuccess: (id: number)=> {}
}
export default function Add(props: Props) {
  
  const [productName, setProductName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [recordAction, setRecordAction] = useState("add");

  const saveRecord = async () => {
    if (productName && totalPrice && quantity) {
      const record = { id: "", productName, totalPrice: parseInt(totalPrice, 10), quantity: parseInt(quantity, 10) };
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
          props.onAddSuccess(newRecord.id);
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
            htmlFor="product-name"
          >
            Product Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="product-name"
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="quantity"
            type="text"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="total-price"
          >
            Total Price
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="total-price"
            type="text"
            placeholder="Enter total price"
            value={totalPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTotalPrice(e.target.value)}
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
