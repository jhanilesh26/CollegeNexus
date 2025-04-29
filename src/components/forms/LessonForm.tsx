"use client";

import { Dispatch, SetStateAction } from "react";

interface LessonFormProps {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}

const LessonForm = ({ type, data, setOpen, relatedData }: LessonFormProps) => {
  const isUpdate = type === "update";

  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        {isUpdate ? "Update Lesson" : "Create Lesson"}
      </h2>
      <input
        name="title"
        defaultValue={data?.title || ""}
        placeholder="Lesson Title"
        className="p-2 border rounded-md"
        required
      />
      <textarea
        name="description"
        defaultValue={data?.description || ""}
        placeholder="Lesson Description"
        className="p-2 border rounded-md"
        required
      />
      <input
        name="date"
        type="date"
        defaultValue={data?.date || ""}
        className="p-2 border rounded-md"
        required
      />
      <button className="bg-green-600 text-white py-2 px-4 rounded-md self-end">
        {isUpdate ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default LessonForm;
