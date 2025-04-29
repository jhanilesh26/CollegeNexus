"use client";

import { Dispatch, SetStateAction } from "react";

interface ParentFormProps {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}

const ParentForm = ({ type, data, setOpen, relatedData }: ParentFormProps) => {
  const isUpdate = type === "update";

  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        {isUpdate ? "Update Parent" : "Create Parent"}
      </h2>
      <input
        name="name"
        defaultValue={data?.name || ""}
        placeholder="Parent Name"
        className="p-2 border rounded-md"
        required
      />
      <input
        name="email"
        type="email"
        defaultValue={data?.email || ""}
        placeholder="Parent Email"
        className="p-2 border rounded-md"
        required
      />
      <input
        name="phone"
        defaultValue={data?.phone || ""}
        placeholder="Phone Number"
        className="p-2 border rounded-md"
        required
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md self-end">
        {isUpdate ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ParentForm;
