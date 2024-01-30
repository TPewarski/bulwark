"use client";
import { useForm } from "react-hook-form";

export const AddPositionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      ticker: "",
    },
  });
  return (
    <form
      className="m-10 mt-0 flex flex-col"
      onSubmit={handleSubmit((data) => console.log({ data }))}
    >
      <input
        {...register("name", { required: "This is a required field" })}
        placeholder="Name"
        className="mb-10 w-1/4 pl-5"
      />
      <p className="h-10 mb-5 text-red-700">{errors.name?.message}</p>
      <input
        {...register("ticker", { required: "This is a required field" })}
        placeholder="Ticker"
        className="mb-10 w-1/4 pl-5"
      />
      <p className="h-10 mb-5 text-red-700">{errors.ticker?.message}</p>
      <button className="w-36 h-12 bg-blue-50 hover:border-solid" type="submit">
        Submit
      </button>
    </form>
  );
};
