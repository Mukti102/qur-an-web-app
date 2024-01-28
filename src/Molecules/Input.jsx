import React from "react";
import { FiSearch } from "react-icons/fi";

function Input({ searcValue, submit, handleChange }) {
  return (
    <form
      onSubmit={submit}
      className="mx-auto flex items-center px-3  w-[80%]  rounded-sm h-10 bg-white"
    >
      <button className="text-primary mr-2 text-xl">
        <FiSearch />
      </button>
      <input
        type="text"
        value={searcValue}
        placeholder="Surat..."
        onChange={handleChange}
        className="w-full outline-none bg-transparent"
      />
    </form>
  );
}

export default Input;
