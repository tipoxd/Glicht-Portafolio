import { Link } from "react-scroll";
export default function NavBar() {
  return (
    <>
      <nav className="w-full fixed z-20">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="root" smooth={true} duration={500}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="footer" smooth={true} duration={500}>
                    Contactame
                  </Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500}>
                    Habilidades
                  </Link>
                </li>
                <li>
                  <a>Proyectos</a>
                  <ul className="p-2">
                    <li>
                      <Link to="person_proyects" smooth={true} duration={500}>
                        Personales
                      </Link>
                    </li>
                    <li>
                      <Link to="workedup_proyects" smooth={true} duration={500}>
                        Trabajados
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl  font-bold   ">
              JR
            </a>
            <label>Jesus Rosales</label>
          </div>
          <div className="navbar-end hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <Link to="root" smooth={true} duration={500}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="footer" smooth={true} duration={500}>
                  Contactame
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Habilidades
                </Link>
              </li>
              <li className="z-[20]" tabIndex={1}>
                <details>
                  <summary>Proyectos</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="person_proyects" smooth={true} duration={500}>
                        Personales
                      </Link>
                    </li>
                    <li>
                      <Link to="workedup_proyects" smooth={true} duration={500}>
                        Trabajados
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
