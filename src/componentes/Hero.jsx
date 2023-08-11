import { useEffect } from "react";

function calcularEdad() {
  var hoy = new Date();
  var cumpleanos = new Date("2001-09-28");
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  return edad;
}
export default function Hero() {
  return (
    <>
      <section class="relative ">
        <div class="[ flex flex-col-reverse    mx-auto p-5  w-full ] [ md:w-3/4 md:flex-row ] [ lg:w-3/4 lg:flex-row ]">
          <div class="[ w-full    p-5 ] [ md:w-2/4 ] [ lg:w-2/4 ]">
            <h1 class="text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              ¡Hola! 👋
            </h1>
            <p class="mt-8 text-white font-semibold text-2xl">
              Me llamo
              <span class="   font-bold text-primary"> Jesús Rosales</span> tengo
               
              <span id="edad" class="text-primary font-bold  "> {calcularEdad()}</span> años y estoy
              comprometido con ayudar a mis clientes a crear la presencia en
              línea que desean. Soy un apasionado de la{" "}
               tecnología y siempre me aseguro de
              estar al día con las últimas tendencias y herramientas en{" "}
              <span class="font-bold text-primary">programación y diseño web.</span> Estoy
              aquí para ayudarte a alcanzar tus objetivos en línea de una manera
              efectiva y atractiva.{" "}
              <span class="font-bold text-primary">
                ¡Contáctame para que podamos empezar a trabajar juntos!
              </span>
              <ul className="flex flex-nowrap">
                <li>
                  <a href="https://github.com/tipoxd">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      x={0}
                      y={0}
                      viewBox="0 0 24 24"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className="w-10 h-10 hover:scale-125 transition-all hover:fill-emerald-600 fill-white"
                    >
                      <g>
                        <path
                          d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
                          
                          className=""
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div class="[  w-full flex-nowrap items-center justify-center ] [ md:flex md:w-2/4 ] [ lg:flex lg:w-2/4 ]  ">
            <img
              class="[ mx-auto h-full rounded-full object-cover ] [ md:h-96 ] [ lg:h-96 ] "
              src="https://unavatar.io/youtube/Glicht"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
