import { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  defaultValue?: any;
  register: any;
  error?: any;
  hidden?: boolean;
  placeholder?: string;
}

const InputField = ({
  label,
  name,
  type = "text",
  defaultValue,
  register,
  error,
  hidden = false,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 w-full md:w-1/4 ${hidden ? "hidden" : ""}`}>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name)}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;