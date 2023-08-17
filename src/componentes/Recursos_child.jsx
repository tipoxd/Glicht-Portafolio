import React from "react";
import { Recursos_child_item } from "./Recursos_child_items";

export const Recursos_child = (data = { Titulo: "", Item_Info: [] }) => {
  return (
    <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-base-100 bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px]   undefined">
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {data.Titulo}
          </h4>
        </div>
      </div>
      <div className="h-full w-full">
        {data.Item_Info.map((item) => {
          return (
            <Recursos_child_item
              Titulo={item.Titulo}
              Href={item.Href}
              Src={item.Src}
              Tooltip_text={item.Tooltip_text}
            />
          );
        })}
      </div>
    </div>
  );
};
