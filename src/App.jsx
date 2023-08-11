import "./componentes/navbar";
import NavBar from "./componentes/navbar";
import Hero from "./componentes/Hero";
import Proyect from "./componentes/proyects";
import Card_Proyecto from "./componentes/card_proyecto";
import "./firebase/config";
import { getFirestore, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Tecnologias } from "./componentes/Tecnologias";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter as Router } from "react-router-dom";
// ..
AOS.init();
function App() {
  let proyectos_trabajados = [
    {
      titulo: "Artemisa",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://sistemaartemisa.net/img/IconoArtemisa.ico",
      url: "http://tecnoriente.com.ve/",
    },
    {
      titulo: "BetsCronos",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://betscronos.com/assets/img/icono.ico",
      url: "https://betscronos.com/",
    },
    {
      titulo: "LotoClub",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://lotoclub.com.ve/assets/img/Loto%20Club_slim.png",
      url: "https://lotoclub.com.ve/",
    },
    {
      titulo: "MundoTools",
      descripcion:
        "MUNDO TOOLS GROUP C.A.. Es una Empresa Distribuidora Autorizada de la Marca TOOLSEN, orientada a brindar soluciones a través de la venta de Herramientas",
      src: "https://mundotoolsgroup.com/assets/img/logo-color.png",
      url: "http://mundotoolsgroup.com/",
    },
    {
      titulo: "DonFortuna",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://donfortuna.net/img/logo.png",
      url: "https://donfortuna.net/",
    },
    {
      titulo: "La Lotomania",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://lalotomania.com/img/vectorpaint.png",
      url: "https://lalotomania.com/",
    },
    {
      titulo: "El Rey del Azar",
      descripcion: "Sistema de Venta de Animalito",
      src: "https://elreydelazar.com/img/icon_page.png",
      url: "https://elreydelazar.com/",
    },
  ];

  let proyectos_personales = [
    {
      titulo: "EmojiAll",
      descripcion: "Bucador Universal de Emojis",
      src: "https://emojiall.000webhostapp.com/favicon.ico",
      url: "https://emojiall.000webhostapp.com/",
    },
    {
      titulo: "MovieRating",
      descripcion: "Peliculas en Tendencia",
      src: "https://movierating.surge.sh/vite.svg",
      url: "https://movierating.surge.sh/",
    },
  ];
  return (
    <>
      <div style={{ fontFamily: '"Darker Grotesque", "Roboto", sans-serif' }}>
        <NavBar />
        <div className="flex flex-nowrap gap-10 flex-col">
          <Hero />
          <Tecnologias Titulo_Categoria="Habilidades" />

          <Proyect
            Id_Section="person_proyects"
            Titulo="Proyectos Personales"
            Items={proyectos_personales}
          />
          <Proyect
            Id_Section="workedup_proyects"
            Titulo="Proyectos Trabajados"
            Items={proyectos_trabajados}
          />
        </div>
      </div>
    </>
  );
}

export default App;
