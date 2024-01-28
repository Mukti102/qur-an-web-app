import React from "react";
function TranslateTogle({ hide, click }) {
  return (
    <div className="flex items-center px-5 justify-end w-full h-14 border-b-[1px] border-slate-200">
      <span className="font-bold text-slate-500 w-20 h-max">Translate</span>
      <button
        onClick={click}
        className={`px-3 text-sm rounded-sm w-14 h-max ${
          !hide ? "bg-base-300" : "bg-primary text-white"
        }`}
      >
        {hide ? "Show" : "Hide"}
      </button>
    </div>
  );
}

export default TranslateTogle;
