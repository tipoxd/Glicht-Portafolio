export default function NavBar() {
  return (
    <>
      <nav
        style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
        className="w-full border-b-2 border-black"
      >
        <div className="flex justify-between">
          <div className="flex flex-nowrap items-center p-3">
            <h2 className="text-lg font-bold">Jesus Rosales</h2>
          </div>
          <div className="h-16">
            <ul className="flex h-full flex-nowrap items-center gap-3 font-semibold">
              <li className="group flex cursor-pointer flex-nowrap items-center gap-3 whitespace-nowrap rounded-lg border border-2 border-b-4 border-r-4 border-solid border-black p-3 px-5 py-2 shadow-lg transition-colors hover:border-b-2 hover:border-r-2 hover:border-black hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Inicio
              </li>
              <li className="group flex cursor-pointer flex-nowrap items-center gap-3 whitespace-nowrap rounded-lg border border-2 border-b-4 border-r-4 border-solid border-black p-3 px-5 py-2 shadow-lg transition-colors hover:border-b-2 hover:border-r-2 hover:border-black hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                Sobre Mi
              </li>
              <li className="">
                <a href="#project" className="group flex cursor-pointer flex-nowrap items-center gap-3 whitespace-nowrap rounded-lg border border-2 border-b-4 border-r-4 border-solid border-black p-3 px-5 py-2 shadow-lg transition-colors hover:border-b-2 hover:border-r-2 hover:border-black hover:shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-black transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  Proyectos
                </a>
              </li>
              <li className="group flex cursor-pointer flex-nowrap items-center gap-3 whitespace-nowrap rounded-lg border border-2 border-b-4 border-r-4 border-solid border-black p-3 px-5 py-2 shadow-lg transition-colors hover:border-b-2 hover:border-r-2 hover:border-black hover:shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-black transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Contactame
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
