import React from "react";
import { Recursos_child } from "./Recursos_child";
export const Recursos_father = () => {
  const svg_arr = [
    {
      Titulo: "Svgporn",
      Href: "https://svgporn.com/",
      Tooltip_text: "Bucador Svg",
      Src: "https://svgporn.com/brand/favicon-32x32.png",
    },
    {
      Titulo: "Heroicons",
      Href: "https://heroicons.com/",
      Tooltip_text: "Banco Svg",
      Src: "https://heroicons.com/_next/static/media/favicon-32x32.2a23e45f.png",
    },
    {
      Titulo: "Flaticon",
      Href: "https://www.flaticon.com",
      Tooltip_text: "Banco Svg",
      Src: "https://media.flaticon.com/dist/min/img/apple-icon-57x57-precomposed.png",
    },
  ];
  const Imagenes_arr = [
    {
      Titulo: "Pixabay",
      Href: "https://pixabay.com/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://pixabay.com/favicon-32x32.png",
    },
    {
      Titulo: "Freepik",
      Href: "https://www.freepik.es/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://freepik.cdnpk.net/img/favicons/favicon-32x32.png?v=2018082101",
    },
    {
      Titulo: "Pexels",
      Href: "https://www.pexels.com/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://www.pexels.com/assets/static/images/meta/pexels-icon.png",
    },
  ];
  const Basquejos_arr = [
    {
      Titulo: "Shots",
      Href: "https://shots.so/",
      Tooltip_text: "Creacion de Mockup",
      Src: "https://shots.so/image/favicon.png",
    },
    {
      Titulo: "Placehold",
      Href: "https://placehold.jp/en.html",
      Tooltip_text: "Creacion de Imagenes de Prueba",
      Src: "https://placehold.jp/24/333333/ffffff/32x32.png?text=P",
    },
  ];

  return (
    <div id="Recursos">
      <div className="w-full mx-auto rounded-lg bg-base px-8 py-4  m-4 [] [ md:w-3/4 ] ">
        <div className="px-1 py-4">
          <h3 className="font-bold text-2xl font-sans text-primary">
            Recursos
          </h3>
        </div>
        <ul className=" [ grid gap-4 px-1 grid-cols-2 ] [ md:grid-cols-3 ] [ lg:grid-cols-3 ]">
          <li>
            <Recursos_child Titulo="Svg" Item_Info={svg_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Imagenes" Item_Info={Imagenes_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Bosquejos" Item_Info={Basquejos_arr} />
          </li>
        </ul>
      </div>
    </div>
  );
};
