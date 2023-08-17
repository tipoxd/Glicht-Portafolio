import React from "react";

export const Tecnologia_Item = (data = { Titulo: "", Src: "" }) => {
  return (
    <>
      <li className="flex items-center flex-col hover:scale-125 transition-all group">
        <img loading="lazy"
          src={`${data.Src}`}
          alt={`${data.Titulo}`}
          className=" [ w-[100px] h-[100px] rounded-full  object-cover ] [ md:w-[120px] md:h-[120px] ] [ lg:w-[120px] lg:h-[120px] ]"
        />
        <h5 className="font-semibold group-hover:text-emerald-600 group-hover:font-bold">{data.Titulo}</h5>
      </li>
    </>
  );
};
