import React from "react";
import { Tecnologia_Item } from "./Tecnologia_Item";
export const Tecnologias = (data = { Titulo_Categoria: "" }) => {
   
  return (
    <div id="skills">
      <div className="w-full mx-auto rounded-lg bg-base px-8 py-4  m-4 [] [ md:w-3/4 ] ">
        <div className="px-1 py-4">
          <h3 className="font-bold text-2xl font-sans text-primary">
            {data.Titulo_Categoria }
          </h3>
        </div>
        <ul className=" [ grid gap-4 px-1 grid-cols-3 ] [ md:grid-cols-4 ] [ lg:grid-cols-4 ]">
          <Tecnologia_Item
            Titulo="Html"
            Src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="CSS"
            Src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Tailwind"
            Src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Jquery"
            Src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="JavaScript"
            Src="https://miro.medium.com/v2/resize:fit:587/1*lK4tzU-kEIEcq04fu0AzQA.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="React"
            Src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Php"
            Src="https://pngimg.com/d/php_PNG27.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Mysql"
            Src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Sql Server"
            Src="https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png"
          ></Tecnologia_Item>
          <Tecnologia_Item
            Titulo="Git"
            Src="https://onthedock.github.io/images/git.png"
          ></Tecnologia_Item>
        </ul>
      </div>
    </div>
  );
};
