export default function Card_Proyecto(
  data = { Titulo: "", Descripcion: "", Src: "", Url: "" }
) {
  function redirectToExternalPage() {
    window.location.href = data.Url;
  }
  return (
    <article
      onClick={() => {
        redirectToExternalPage();
      }}
      style={{ backgroundImage: `url("${data.Src}")` }}
      className={`border-2  border-gray-300 hover:border-emerald-600 transition-all relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl   duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-black  bg-opacity-50 group-hover:opacity-80 transition duration-300 ease-in-out" />
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <a
            className="text-white text-2xl font-bold text-center group-hover:hidden"
            href="#"
          >
            <span className="absolute inset-0"></span>
            {data.Titulo}
          </a>
          <a
            className="text-white text-2xl font-bold text-center hidden group-hover:block transition-all"
            href="#"
          >
            <span className="absolute inset-0"></span>
            {data.Descripcion}
          </a>
        </h3>
      </div>
    </article>
  );
}
