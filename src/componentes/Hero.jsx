import { useEffect } from "react";
import { animated, useSpring } from 'react-spring';
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
      <section class="relative mt-28 ">
        <div class="[ flex flex-col-reverse    mx-auto p-5  w-full ] [ md:w-3/4 md:flex-row ] [ lg:w-3/4 lg:flex-row ]">
          <div class="[ w-full    p-5 ] [ md:w-2/4 ] [ lg:w-2/4 ]">
            <h1 class="text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              Hey! 👋
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
              <ul className="flex flex-nowrap items-center justify-center">

                <li className="mt-5">
                  <a href='https://wa.me/+584140888941' class="btn-primary btn normal-case text-2xl  font-bold mx-auto   ">Contactame</a>
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
