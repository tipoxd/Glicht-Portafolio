import React from "react";
import { Recursos_child } from "./Recursos_child";
export const Recursos_father = () => {
  const svg_arr = [
    {
      Titulo: "Svgporn",
      Href: "https://svgporn.com/",
      Tooltip_text: "Bucador Svg",
      Src: "https://svgporn.com/brand/favicon-32x32.png",
    },
    {
      Titulo: "Heroicons",
      Href: "https://heroicons.com/",
      Tooltip_text: "Banco Svg",
      Src: "https://heroicons.com/_next/static/media/favicon-32x32.2a23e45f.png",
    },
    {
      Titulo: "Flaticon",
      Href: "https://www.flaticon.com",
      Tooltip_text: "Banco Svg",
      Src: "https://media.flaticon.com/dist/min/img/apple-icon-57x57-precomposed.png",
    },
  ];
  const Imagenes_arr = [
    {
      Titulo: "Pixabay",
      Href: "https://pixabay.com/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://pixabay.com/favicon-32x32.png",
    },
    {
      Titulo: "Freepik",
      Href: "https://www.freepik.es/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://freepik.cdnpk.net/img/favicons/favicon-32x32.png?v=2018082101",
    },
    {
      Titulo: "Pexels",
      Href: "https://www.pexels.com/",
      Tooltip_text: "Banco de Imagenes",
      Src: "https://www.pexels.com/assets/static/images/meta/pexels-icon.png",
    },
  ];
  const Basquejos_arr = [
    {
      Titulo: "Shots",
      Href: "https://shots.so/",
      Tooltip_text: "Creacion de Mockup",
      Src: "https://shots.so/image/favicon.png",
    },
    {
      Titulo: "Placehold",
      Href: "https://placehold.jp/en.html",
      Tooltip_text: "Creacion de Imagenes de Prueba",
      Src: "https://placehold.jp/24/333333/ffffff/32x32.png?text=P",
    },
    {
      Titulo: "Pacdora",
      Href: "https://www.pacdora.com/",
      Tooltip_text:
        "Pacdora es una herramienta de diseño de envases en línea que integra edición, vista previa 3D y renderizado. Modelos: Cajas plegables, botellas, etiquetas, latas/frascos, bolsas, cajas de almacenamiento, cajas plegables, cajas con tapa, cajas con bandeja, cajas expositoras.",
      Src: "https://www.pacdora.com/_pacui/pacdora-icon.png",
    },
  ];
  const Loaders_arr = [
    {
      Titulo: "Loading.io",
      Href: "https://loading.io/css/",
      Tooltip_text:
        "Animaciones de carga CSS de código abierto dedicadas a la velocidad, la simplicidad y la facilidad de desarrollo.",
      Src: "https://loading.io/favicon.ico",
    },
  ];

  const Colores_arr = [
    {
      Titulo: "Loading.io",
      Href: "https://pigment.shapefactory.co/",
      Tooltip_text:
        "Una forma única de generar colores frescos y vibrantes a partir de iluminación y pigmentos",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAA1ZJREFUWEfNWE1IW0EQ/nwqehDpD96CUHkEQVsCLRiQQgwoKlp78KBoBWk95RClBQ8iSM5WaA4i2OLBnBSl1J+DKAg9iRVK68W4WFARQWpr8aKQVebxXsjTZHeSS51TYL/59svM7OzsywPTTNMsBfACQACAD8AjAPds978AfgH4DmAdwBchxD8mtQXL04ErKioeG4YRBtALwNDh7XUJYEpK+WFvb+8nx0cpxDTNUQBvOUQKzHshxDsdR1ohdhSmADzVETDXt6SUvaro3BLi9XqfSyk/A3jA3IQLOzUM42U8Hv+azsElxI4EFRtLRFVVFS4vL7G7u8sWI6UMpIuMS4hpmt+46SgpKcHy8jIKCgrQ0NCA8/NzrpgtIcSzm+CkkGwLc2xsDK2trRbf4uIiBgYGuEIId6uALSF2Sn5wmZqamhCNRl3wcDhsRYhrUsonqSmyhJim+RHAaw5JWVkZVlZWQKlJtbOzM5DAk5MTDg1hPgkh3jjgPLtj/uE2q1gshpqamrSbbWxsoLu7myuEmt59pwOTEPKc5nj39PRgeHhYCY1EIpieZtERzyshRIx+kBBWWsrLy60aKCoqUgq5uLhAc3Mz9vf3Of8tmR4Soj2yhmFgbm4O1dXVHHJsb2+jvb0diURCh08eZRLyW9fAurq6MDIyoiN1rQ8NDWFmZkbncyqEeOikhmRnvFUpGmtra/B4PDpS1/rh4SGCwSCurq5UflIIkc8S4vP5MDs7m5UIB9zS0oKdnR22EGVq6uvrMT4+npOQ/v5+LC0tqXxdqVEWa1tbG0ZHaSzJ3vr6+rC+TndoRnMVq/L4VlZWYmFhIXsVgFUjBwcHKl/X8VU2NCrWzc1NlJbSyMq3o6Mj1NXVQUpqoBnN1dBoB2WL7+zsBHXMbGxwcBDz8/PKQnW1eEJyuuvk5CQCARrg9ba6uopQKKSLhvvSI1rOGFBcXIyJiQnU1tYqlVAHpmam66ppxwA7KqyJvbGxER0dHfD7/cjPt3qRZcfHx9aFqDklDjz9YOSscu4dB1tYWAiv12vNJTSLxONxXSocV/WomJIi9vCsr5ZbiFPW8Exud+I54ei/Ew+s1GBmO9lnSFXuT85UwjvxCL8Rnf/7WSKHk5GTi/b7SE6sOThdA2AXazKG6DXtAAAAAElFTkSuQmCC",
    },
    {
      Titulo: "Color-Name",
      Href: "https://www.color-name.com/",
      Tooltip_text:
        "es una excelente herramienta en línea para encontrar el nombre del color a partir del código hexadecimal. Descargue paletas, patrones, fondos de pantalla del color que elija y obtenga valores RGB, CMYK, Pantone, RAL y más.",
      Src: "https://www.color-name.com/apple-touch-icon.png",
    },
  ];
  const Otros_arr = [
    {
      Titulo: "Patorjk",
      Href: "https://patorjk.com/software/taag/",
      Tooltip_text: "Creacion de Texto para Consolas ",
      Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      Titulo: "JSON Crack",
      Href: "https://jsoncrack.com/",
      Tooltip_text:
        "es una aplicación de visualización de datos gratuita y de código abierto capaz de visualizar formatos de datos como JSON, YAML, XML, CSV y más, en gráficos interactivos.o",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEVHcEz////////18/b////////////l4ef5+Pr////////////////18vYnADYmAzseADUGACX///8XACzBuMQDART/hQmHeo11aHxDLEp2Py5rXXNRPVw5HkeYi57V0NjCXwSxqLX+oDSxe1LNfz3ndA2qUgkXwzc0AAAADnRSTlMAmE3FH9WI+u8RQpSVxcT88q8AAAGWSURBVDiNjVPZcsMgDCRHA2lSLCGwwfioO03+/xMrsJ2SJjPpPmDGLJJWrIS4Yb/d7CRjt9nuxSP2Z2Wb2IXQxcaq01/K8SAHRALQGoAQB3k43p2/2Z601pVeFurtW8F4Vx5BlwQN6NX77b5qsHoANuq4xveoZ/xGYKBfshws3p1V6wbtIeuT/XrnPoKuepnUngbKdwAReMMinUPKBBrOHEChTjVBe7lcoaJuksaMTQ+5ULUXW64gRYC2rj+RojIZo0u50G7FpqGC0PH5aC2vU/pNzUZ8RCgIgzHSOef5E/g3xJ2QXUFwozHcNE1MShGgk0KGTKiqTOACPawqmRBuhCJCkkhEqchMmFMAZcLE1TkiGEcblhS7mFW07XddXzGywsk3nMm6pCJ+sMzcku+vr7puoZrMgkCpeyxzbhQw4XLl+t3AZRhlA66Nyq3WOrStzhvqo/edm/2VWi3O82MlO85yWMGslB/r9J/nToZ5NFx+y9kwry2XTVs4bVl+Tfva9q8Hpxi9hCejl9SeyuE9P53vp+P/A9nsNkgXcVBwAAAAAElFTkSuQmCC",
    },
    {
      Titulo: "Responsively App",
      Href: "https://responsively.app/",
      Tooltip_text:
        "Una herramienta de desarrollo que ayuda a un desarrollo web responsivo más rápido y preciso",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACGklEQVR4AezVg5IdURgE4F7btm3btrcU27Zt27btpIyknNcJOviDxdVcrKeqx/jmEIO+NDU12dfW1oYaK3V1dc6KAEFBQbfs7OxorPj5+X1UBPD29n4MgMaKu7v75zHAGMAwgJ0N0ZhPNBf2SAFRmUHEhRAW5gNQAku6iRd7iEPziUVdkg2TiPtbiStribJ0EwNqcwTQUdr7vKsjsXeOXKvPNSGgMlMVQOLmRDzYRtzZTFhbDThAsma8XE8IGyTAzGa5nh6tFlBdXR1bV1eXpikVFRU++gE2TCSe7pI2oQLQ3NzslJWV9T0jI4OakpeX91o5wNeDeLyDWNytthG2tra6OjoKTlN8fHw+KAMEeBEnlxD75xL2NgMEaMgj1k8kDswjTiwhOksJK0u5b0AATvbEhVXE891EQVLv+wasCsL9iYfbZSQM8h5wgKQ8Xc6dXib1rwSwoJOYUi/DeGmaAY1wdqucXzuBMDPTFSBtaF47YW5uYC+wtCD2zZVrXaXKACkRBndDibszcX098WyXjIS6ApKVAJryBTC+RnVdJ4YRT3YS97YQMcFGBpibEbtmCuDYYil2VYiWQrnn7hYiNcpoAJlifdz/x9ZafVfycZN7vF01A3zdCTsbzQAFGYBxYCABAQEBd2xsbGis+Pr6furq6nIsKCj4mpubS00pLCx8gR9zcHDgoWbnFGieAAMQeHl5SZDRkaU/AAC8ka8LfCraCQAAAABJRU5ErkJggg==",
    },
  ];
  const Librerias_js_arr = [
    {
      Titulo: "Sweetalert2",
      Href: "https://sweetalert2.github.io/",
      Tooltip_text:
        "Un reemplazo hermoso, responsivo, personalizable y accesible (WAI-ARIA) para los cuadros emergentes de JavaScript.",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEVHcEyJYaKyip6OZqPuz5+qja+ScanwyJmLY6OJYaKUbKKegLSNZKGiibTOtq7Boavkr5SehLLszZ6fh7WdgbKLY6HtuJWjjLXtzp7vupHBn5/lsJPtzp7z1J7ospLv0J6DWaKMY6GbcZ/irJPCn6Hiwp6ie6DcqJTWtp/ioY6qf57ut5G8l6DPnZehi7bNqqDgkomylK6MeELTAAAAG3RSTlMA8v2CP4csXtix/Q9lcBcz4FDGo8CbUNDZg9q4/c85AAAByUlEQVQ4jZ1RiXKbMBQUYEACbBw7ddLqRuIwp/n/n6vEZdKkzUx3OOaxy9PuewB8xPEF/BvX6zeC7zrEQRB/9f3tZJ8JlA6EjoSJrYK3ncDvY5BIFACQ3sKbj6Q5qD/uW6QAwhjczg/MFFbsHCHwhxnpgcMZY8zGkT0UZjX8yDte0GusjEIzfDfvpkZ7/gcCIcP4/jAtzGXvJkt24SRI8YSy61Qz9qoTUSZPzwYeUPc7xqqUMBKFUqzWeVX/ejoEIbYC6dt2V6lYKVxaFYeFDxxgA2Dlz7WXlcaCpuJiqxc/TVBa2oRiyxSJNmtplE9DfPUT7zqwUZdbdDTkrua0qJYzPM8vsRpLZzOtOeeE1lU41wn6aU9gYs3lVJwQQrN8EQRwCsHq17k+RpRYgSDhGjOcxyQnhSdyy5M8omtO5DOszJhVISEUWc6nBsbnaioQZyswOxDVkE/9DQS5bKNErtlPWbh2PAtNC80PmwA4HWOZLupGLALaZvT9yR8D0TVZRc2mZgHVkpPnNo99HDtuF1E6++OkiAjZHeCndnwiI5RyblStaOmeX3BypaxdtxCyJfz99Ik3CC/VMFSE8svn31ccwjD8O/tf+A2/LTQ0EYmXNQAAAABJRU5ErkJggg==",
    },
    {
      Titulo: "Toastify.js",
      Href: "https://apvarun.github.io/toastify-js/",
      Tooltip_text: "Mejores mensajes de notificación",
      Src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      Titulo: "Atropos.js",
      Href: "https://atroposjs.com/",
      Tooltip_text:
        "Atropos es una biblioteca de JavaScript liviana, gratuita y de código abierto para crear impresionantes efectos de desplazamiento de paralaje 3D táctiles.",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEVHcEy1PfW1PfW1PfW1PfW1PfWzNfWxKfTPjvnu2f3HdfeuHPT8+v3///+/Xvf06fzaqfq4QPhpAKThxPaHGsORYLiebcNfAJ2aDty2ktKje8KIBa0UAAAABnRSTlMAMbf/dnWV0I+qAAAA4ElEQVR4AY2T0RqCIAxG0dVQAG1Eab3/g0bg3E1A58rtO7qfT6aUGkaoMA4qcYEG1/Q+NBnU2BZGBR3+E1D/BFnAaf6JwUOwzp8sXlg1j5DepI0XbBFQerMFfRNhOQRpEQawM1duwizoO3duGB9P0k7qIqwcyuLm1h3onKiLICND+tgL0fAMmwU+2V3jbsgiSNAcEqejQiACynBQg0ngjMbuiRhjCNtbUirJ6Jj0dE5NgvV11iTg4ht8BdMSKI1A86ySTwF6CxU2LL87VqEiUJ2/Lm2H/uJ0V09dO8vbW/8PXG8i3eBo8IMAAAAASUVORK5CYII=",
    },
    {
      Titulo: "Swiper",
      Href: "https://swiperjs.com/",
      Tooltip_text:
        "Swiper es el control deslizante táctil móvil gratuito y de código abierto más moderno con transiciones aceleradas por hardware y un comportamiento nativo sorprendente. Úselo en sitios web.",
      Src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEwAgf8AgP8AgP8AgP8AgP8AgP8AgP8AgP8Agf8AgP8AgP8AgP8AgP8AgP8Agv8AgP8AgP8iohBTAAAAEnRSTlMAFV6Ot8Nu4P8mQauc5tIJfvNdM2tEAAAA50lEQVR4AWWTBY5FIQwAB32C3/+wq79pCROjAlUwOB9iSjF4h6Lk6xbiw8F7C+kFeF42ipiLA95fsWKQ19sDLnyEftojDHnLekSJDl7NEsUoYd47L7+IFHnkKCwwt6YcDR5YGtEfDhfm2aXOirPPevU2umKkoR3XuH1L+ngj0qy4BvTNodOO1pTdQS4Ic/dIxDMtupXO7k2cClkLU5x59oHTIZDttIJazqFMYBwOL1WO6LyVoGG9rqSStx0E9iDJaaMWgrNfyl1mMML4VfYMaH6djZkH8FSTyoGbzVZyMt6QrrWuGF6UbzrSGL7V3Ez6AAAAAElFTkSuQmCC",
    },
  ];

  return (
    <div id="Recursos">
      <div className="w-full mx-auto rounded-lg bg-base px-8 py-4  m-4 [] [ md:w-3/4 ] ">
        <div className="px-1 py-4">
          <h3 className="font-bold text-2xl font-sans text-primary">
            Recursos
          </h3>
        </div>
        <ul className=" [ grid gap-4 px-1 grid-cols-2 ] [ md:grid-cols-3 ] [ lg:grid-cols-3 ]">
          <li>
            <Recursos_child Titulo="Svg" Item_Info={svg_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Imagenes" Item_Info={Imagenes_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Bosquejos" Item_Info={Basquejos_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Loaders" Item_Info={Loaders_arr} />
          </li>
          <li>
            <Recursos_child Titulo="Colores" Item_Info={Colores_arr} />
          </li>
          <li>
            <Recursos_child
              Titulo="Librerias js"
              Item_Info={Librerias_js_arr}
            />
          </li>
          <li>
            <Recursos_child Titulo="Otros" Item_Info={Otros_arr} />
          </li>
        </ul>
      </div>
    </div>
  );
};
