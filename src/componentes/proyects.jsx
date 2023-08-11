import Card_Proyecto from "./card_proyecto";
import { Link } from "react-router-dom";
export default function Proyect(
  data = { Id_Section: "", Titulo_Categoria: "", Items: [] }
) {


  
  return (
    <>
      <section
        data-aos="fade-up"
        id={data.Id_Section}
        className="w-3/4  rounded-lg   mx-auto px-4 sm:px-6 lg:px-4 mb-12"
      >
        <h3 className="font-bold text-2xl font-sans text-emerald-600">
          {data.Titulo}
        </h3>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 p-5">
          {data.Items.map((item) => (
            <Card_Proyecto
              key={item.id}
              Titulo={item.titulo}
              Descripcion={item.descripcion}
              Src={item.src}
              Url={item.url}
            />
          ))}
        </section>
      </section>
    </>
  );
}
