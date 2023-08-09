import "./componentes/navbar";
import NavBar from "./componentes/navbar";
import Hero from "./componentes/Hero";
import Proyect from "./componentes/proyects";
import Card_Proyecto from "./componentes/card_proyecto";
import "./firebase/config";
import { getFirestore, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Tecnologias } from "./componentes/Tecnologias";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {

  return (
    <>
      <NavBar />
      <div className="flex flex-nowrap gap-10 flex-col">
        <Hero />
        <Tecnologias Titulo_Categoria="Habilidades" />
        <Proyect />
      </div>
    </>
  );
}

export default App;
