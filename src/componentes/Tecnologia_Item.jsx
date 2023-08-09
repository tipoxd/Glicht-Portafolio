import React from "react";

export const Tecnologia_Item = (data = { Titulo: "", Src: "" }) => {
  return (
    <>
      <li className="flex items-center flex-col hover:scale-125 transition-all group">
        <img
          src={`${data.Src}`}
          alt={`${data.Titulo}`}
          className="rounded-full w-32 h-32 object-cover"
        />
        <h5 className="font-semibold group-hover:text-emerald-600 group-hover:font-bold">{data.Titulo}</h5>
      </li>
    </>
  );
};
