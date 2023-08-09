import Card_Proyecto from "./card_proyecto";

export default function Proyect() {
  return (
    <>
      <section data-aos="fade-up"
        id="project"
        style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
        className="w-3/4  rounded-lg shadow-lg  mx-auto px-4 sm:px-6 lg:px-4 mb-12"
      >
        <h3 className="font-bold text-2xl font-sans text-emerald-600">
          Proyectos Trabajados
        </h3>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 p-5">
          <Card_Proyecto
            Titulo="Artemisa"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://sistemaartemisa.net/img/IconoArtemisa.ico"
          />
          <Card_Proyecto
            Titulo="BetsCronos"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://betscronos.com/assets/img/icono.ico"
          />
          <Card_Proyecto
            Titulo="LotoClub"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://lotoclub.com.ve/assets/img/Loto%20Club_slim.png"
          />
          <Card_Proyecto
            Titulo="MundoTools"
            Descripcion="MUNDO TOOLS GROUP C.A.. Es una Empresa Distribuidora Autorizada de la Marca TOOLSEN, orientada a brindar soluciones a través de la venta de Herramientas"
            Src="https://mundotoolsgroup.com/assets/img/logo-color.png"
          />
          <Card_Proyecto
            Titulo="DonFortuna"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://donfortuna.net/img/logo.png"
          />
          <Card_Proyecto
            Titulo="La Lotomania"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://lalotomania.com/img/vectorpaint.png"
          />
          <Card_Proyecto
            Titulo="El Rey del Azar"
            Descripcion="Sistema de Venta de Animalito"
            Src="https://elreydelazar.com/img/icon_page.png"
          />
        </section>
      </section>
    </>
  );
}
