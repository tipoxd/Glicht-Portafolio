import React from "react";

export const Recursos_child_item = (
  data = { Titulo: "", Href: "", Tooltip_text: "", Src: "" }
) => {
  return (
    <div className="mt-5 flex items-center justify-between p-2">
      <div className="flex items-center justify-center gap-2">
        <img
          loading="lazy"
          className="w-5 h-5"
          src={data.Src}
          alt={data.Titulo}
          srcset=""
        />
        <div className="tooltip" data-tip={data.Tooltip_text}>
          <a href={data.Href}>
            <p className="text-lg transition-all font-bold hover:text-primary hover:underline ">
              {data.Titulo}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
