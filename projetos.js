"use client";

import { useState } from "react";

export default function Projetos({ dark, filter }) {
  const [openProject, setOpenProject] = useState(null);

  const [currentImage, setCurrentImage] = useState({
    p1: 0,
    p2: 0,
  });

  // ==========================
  // CAPAS DOS PROJETOS
  // ==========================

  const project1Cover = "/projeto1/capa.jpeg";
  const project2Cover = "/projeto2/capa.jpeg";

  // ==========================
  // IMAGENS DO PROJETO 1
  // ==========================

  const project1Images = [
    "/projeto1/img1.jpeg",
    "/projeto1/img2.jpeg",
    "/projeto1/img3.jpeg",
    "/projeto1/img4.jpeg",
    "/projeto1/img5.jpeg",
    "/projeto1/img6.jpeg",
    "/projeto1/img7.jpeg",
    "/projeto1/img8.jpeg",
    "/projeto1/img9.jpeg",
    "/projeto1/img10.jpeg",
    "/projeto1/img11.jpeg",
    "/projeto1/img12.jpeg",
    "/projeto1/img13.jpeg",
    "/projeto1/img14.jpeg",
    "/projeto1/img15.jpeg",
    "/projeto1/img16.jpeg",
    "/projeto1/img17.jpeg",
    "/projeto1/img18.jpeg",
    "/projeto1/img19.jpeg",
    "/projeto1/img20.jpeg",
    "/projeto1/img21.jpeg",
    "/projeto1/img22.jpeg",
    "/projeto1/img23.jpeg",
    "/projeto1/img24.jpeg",
    "/projeto1/img25.jpeg",
    "/projeto1/img26.jpeg",
    "/projeto1/img27.jpeg",
    "/projeto1/img28.jpeg",
    "/projeto1/img29.jpeg",
    "/projeto1/img30.jpeg",
    "/projeto1/img31.jpeg",
    "/projeto1/img32.jpeg",
    "/projeto1/img33.jpeg",
    "/projeto1/img34.jpeg",
    "/projeto1/img35.jpeg",
    "/projeto1/img36.jpeg",
    "/projeto1/img37.jpeg",
    "/projeto1/img38.jpeg",
    "/projeto1/img39.jpeg",
  ];

  // ==========================
  // IMAGENS DO PROJETO 2
  // ==========================

  const project2Images = [
    "/projeto2/img1.png",
    "/projeto2/img2.png",
    "/projeto2/img3.png",
    "/projeto2/img4.png",
    "/projeto2/img5.png",
  ];

  // ==========================
  // PRÓXIMA IMAGEM
  // ==========================

  const nextImage = (project) => {
    if (project === "p1") {
      setCurrentImage((prev) => ({
        ...prev,
        p1: (prev.p1 + 1) % project1Images.length,
      }));
    } else {
      setCurrentImage((prev) => ({
        ...prev,
        p2: (prev.p2 + 1) % project2Images.length,
      }));
    }
  };

  // ==========================
  // IMAGEM ANTERIOR
  // ==========================

  const previousImage = (project) => {
    if (project === "p1") {
      setCurrentImage((prev) => ({
        ...prev,
        p1:
          prev.p1 === 0
            ? project1Images.length - 1
            : prev.p1 - 1,
      }));
    } else {
      setCurrentImage((prev) => ({
        ...prev,
        p2:
          prev.p2 === 0
            ? project2Images.length - 1
            : prev.p2 - 1,
      }));
    }
  };

  return (
    <>
      {/* =========================================================
          CAPA - PROJETO 1
      ========================================================= */}

      {(filter === "all" || filter === "projects") && (
        <div
          onClick={() => setOpenProject("p1")}
          className="
            group
            relative
            w-full
            self-start

            /* ==================================================
               MOBILE:
               BLOCO MENOR
               ================================================== */

            min-h-[220px]

            /* ==================================================
               DESKTOP:
               MANTÉM O TAMANHO ORIGINAL
               ================================================== */

            sm:min-h-[300px]
            md:min-h-[400px]

            overflow-hidden
            rounded-2xl

            cursor-pointer

            shadow-sm
            hover:shadow-xl

            transition-all
            duration-500

            hover:scale-[1.015]
          "
        >
          <img
            src={project1Cover}
            alt="Capa do projeto Kolyx"
            className="
              absolute
              inset-0

              w-full
              h-full

              /* ==================================================
                 MOBILE:
                 A CAPA OCUPA TODO O BLOCO
                 SEM CORTAR
                 ================================================== */

              object-contain
              scale-[1.12]

              /* ==================================================
                 DESKTOP:
                 MANTÉM O COMPORTAMENTO ORIGINAL
                 ================================================== */

              md:object-cover
              md:scale-100

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* =========================================================
          CAPA - PROJETO 2
      ========================================================= */}

      {(filter === "all" || filter === "projects") && (
        <div
          onClick={() => setOpenProject("p2")}
          className="
            group
            relative
            w-full
            self-start

            /* ==================================================
               MOBILE:
               BLOCO MENOR
               ================================================== */

            min-h-[220px]

            /* ==================================================
               DESKTOP:
               MANTÉM O TAMANHO ORIGINAL
               ================================================== */

            sm:min-h-[300px]
            md:min-h-[400px]

            overflow-hidden
            rounded-2xl

            cursor-pointer

            shadow-sm
            hover:shadow-xl

            transition-all
            duration-500

            hover:scale-[1.015]
          "
        >
          <img
            src={project2Cover}
            alt="Capa do Task Management System"
            className="
              absolute
              inset-0

              w-full
              h-full

              /* ==================================================
                 MOBILE:
                 A CAPA OCUPA TODO O BLOCO
                 SEM CORTAR
                 ================================================== */

              object-contain
              scale-[1.12]

              /* ==================================================
                 DESKTOP:
                 MANTÉM O COMPORTAMENTO ORIGINAL
                 ================================================== */

              md:object-cover
              md:scale-100

              transition-transform
              duration-700

              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* =========================================================
          MODAL
      ========================================================= */}

      {openProject && (
        <div
          className="
            fixed
            inset-0

            bg-black/70
            backdrop-blur-sm

            z-50

            flex
            items-center
            justify-center

            p-3
            sm:p-5
          "
        >
          <div
            className="
              relative

              w-full
              max-w-5xl

              max-h-[94vh]
              sm:max-h-[90vh]

              overflow-y-auto

              rounded-2xl
              sm:rounded-3xl

              p-5
              sm:p-8

              shadow-2xl

              bg-[#eadfce]
              text-black
            "
          >
            {/* =====================================================
                BOTÃO X
            ===================================================== */}

            <button
              onClick={() => setOpenProject(null)}
              aria-label="Fechar projeto"
              className="
                absolute

                top-4
                right-4

                sm:top-5
                sm:right-5

                w-9
                h-9

                sm:w-10
                sm:h-10

                rounded-full

                bg-[#eadfce]

                border
                border-black

                text-black

                text-xl
                sm:text-2xl

                font-medium

                hover:bg-[#ded0bc]
                hover:opacity-80

                active:opacity-50
                active:scale-95

                transition
                duration-150

                flex
                items-center
                justify-center

                leading-none
              "
            >
              ×
            </button>

            {/* =====================================================
                TÍTULO
            ===================================================== */}

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold

                mb-5
                sm:mb-6

                pr-12

                text-black
              "
            >
              {openProject === "p1"
                ? "Kolyx - Delivery Platform"
                : "Task Management System"}
            </h2>

            {/* =====================================================
                BOTÃO REPOSITORY
            ===================================================== */}

            <a
              href={
                openProject === "p1"
                  ? "https://github.com/melissasantana1/Kolyx-Delivery-Application"
                  : "https://github.com/melissasantana1/Task_Management_System"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center

                mb-6
                sm:mb-8

                px-5
                py-2.5

                rounded-full

                bg-[#d3c2aa]
                text-black

                text-sm
                font-light

                border
                border-[#b9a78e]

                hover:bg-[#c6b39a]
                hover:opacity-90

                active:opacity-60
                active:scale-95

                transition
                duration-150
              "
            >
              Repository
            </a>

            {/* =====================================================
                DESCRIÇÃO
            ===================================================== */}

            <div
              className="
                rounded-xl

                p-5
                sm:p-6

                leading-8

                bg-[#f5eee4]
                text-black
              "
            >
              {openProject === "p1" ? (
                <>
                  <p className="mb-4 leading-7">
                    Kolyx is a delivery marketplace that connects people
                    who need to send packages with travelers already heading
                    to the destination, creating a more affordable and
                    flexible alternative to traditional shipping services.
                  </p>

                  <p className="mb-4 leading-7">
                    The platform allows users to find delivery opportunities,
                    manage shipments, and connect senders with travelers
                    through a streamlined digital experience.
                  </p>

                  <p className="mb-4 leading-7">
                    Developed as an MVP for a startup, the project focuses
                    on validating the business model while establishing a
                    scalable foundation for future growth.
                  </p>

                  <p className="mt-6 font-semibold">
                    Technologies:
                  </p>

                  <p className="leading-7">
                    React.js • Node.js • PostgreSQL • Redis • TypeORM •
                    Supabase Auth • AWS Cloud • WebSockets • REST APIs
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4 leading-7">
                    Employee Task Management System is a full-stack web
                    application designed to centralize employee and task
                    management through a secure, organized, and
                    user-friendly platform.
                  </p>

                  <p className="mb-4 leading-7">
                    The system enables organizations to manage employees,
                    assign tasks, monitor deadlines, track task progress,
                    and visualize operational metrics through an
                    interactive dashboard.
                  </p>

                  <p className="mb-4 leading-7">
                    Developed as a complete web application, the project
                    focuses on providing efficient task organization,
                    role-based access control, and a scalable architecture
                    for future enhancements.
                  </p>

                  <p className="mt-6 font-semibold">
                    Technologies:
                  </p>

                  <p className="leading-7">
                    PHP • MySQL • HTML5 • CSS3 • JavaScript • jQuery •
                    AJAX • Bootstrap
                  </p>
                </>
              )}
            </div>

            {/* =====================================================
                GALERIA
            ===================================================== */}

            <div className="mb-8 mt-8">
              <h3
                className="
                  text-xl
                  sm:text-2xl

                  font-semibold

                  mb-5
                  sm:mb-6

                  text-black
                "
              >
                Galeria
              </h3>

              {/* ===================================================
                  CARROSSEL - PROJETO 1

                  MOBILE:
                  - FOTO COMPLETA
                  - SEM CORTES
                  - SEM BORDAS LATERAIS
                  - SEM ESPAÇO ARTIFICIAL EM CIMA/BAIXO
                  - A ALTURA É DEFINIDA AUTOMATICAMENTE PELA FOTO

                  DESKTOP:
                  - MANTÉM O COMPORTAMENTO ORIGINAL
                  =================================================== */}

              {openProject === "p1" && (
                <div
                  className="
                    relative
                    w-full

                    flex
                    justify-center
                    items-center

                    px-0
                    sm:px-8
                  "
                >
                  <img
                    src={project1Images[currentImage.p1]}
                    alt="Projeto 1"
                    className="
                      /* ==================================================
                         MOBILE:
                         A IMAGEM FICA INTEIRA.
                         SEM ALTURA FIXA.
                         SEM OBJECT-CONTAIN DENTRO DE UMA CAIXA.
                         ================================================== */

                      w-full
                      max-w-[270px]
                      h-auto

                      object-contain

                      rounded-2xl

                      /* ==================================================
                         DESKTOP:
                         VOLTA AO TAMANHO ORIGINAL
                         ================================================== */

                      sm:w-full
                      sm:max-w-[300px]

                      sm:h-[700px]

                      sm:object-cover

                      sm:border
                      sm:border-black/20
                    "
                  />

                  {/* BOTÃO ANTERIOR */}

                  <button
                    onClick={() => previousImage("p1")}
                    aria-label="Imagem anterior"
                    className="
                      absolute

                      left-0
                      sm:left-2
                      md:left-4

                      top-1/2
                      -translate-y-1/2

                      w-10
                      h-10

                      sm:w-12
                      sm:h-12

                      rounded-full

                      bg-black/70
                      text-white

                      text-xl
                      sm:text-2xl

                      hover:bg-black
                      hover:opacity-90

                      active:opacity-50
                      active:scale-95

                      transition
                      duration-150

                      flex
                      items-center
                      justify-center

                      leading-none
                    "
                  >
                    ❮
                  </button>

                  {/* BOTÃO PRÓXIMO */}

                  <button
                    onClick={() => nextImage("p1")}
                    aria-label="Próxima imagem"
                    className="
                      absolute

                      right-0
                      sm:right-2
                      md:right-4

                      top-1/2
                      -translate-y-1/2

                      w-10
                      h-10

                      sm:w-12
                      sm:h-12

                      rounded-full

                      bg-black/70
                      text-white

                      text-xl
                      sm:text-2xl

                      hover:bg-black
                      hover:opacity-90

                      active:opacity-50
                      active:scale-95

                      transition
                      duration-150

                      flex
                      items-center
                      justify-center

                      leading-none
                    "
                  >
                    ❯
                  </button>
                </div>
              )}

              {/* ===================================================
                  CARROSSEL - PROJETO 2

                  MOBILE:
                  - FOTO COMPLETA
                  - SEM CORTES
                  - SEM BORDAS EM CIMA/BAIXO
                  - SEM ESPAÇO ARTIFICIAL
                  - LARGURA CONTROLADA
                  - ALTURA AUTOMÁTICA

                  DESKTOP:
                  - MANTÉM O COMPORTAMENTO ORIGINAL
                  =================================================== */}

              {openProject === "p2" && (
                <div
                  className="
                    relative
                    w-full

                    flex
                    justify-center
                    items-center

                    px-0
                    sm:px-4
                  "
                >
                  <img
                    src={project2Images[currentImage.p2]}
                    alt="Projeto 2"
                    className="
                      /* ==================================================
                         MOBILE:
                         IMAGEM COMPLETA E SEM BORDAS.
                         ALTURA AUTOMÁTICA PARA PRESERVAR
                         A PROPORÇÃO ORIGINAL.
                         ================================================== */

                      w-full
                      max-w-[370px]
                      h-auto

                      object-contain

                      rounded-2xl

                      /* ==================================================
                         DESKTOP:
                         VOLTA AO TAMANHO ORIGINAL
                         ================================================== */

                      sm:max-w-[800px]

                      sm:h-[300px]

                      sm:object-cover

                      md:h-[360px]

                      sm:border
                      sm:border-black/20
                    "
                  />

                  {/* BOTÃO ANTERIOR */}

                  <button
                    onClick={() => previousImage("p2")}
                    aria-label="Imagem anterior"
                    className="
                      absolute

                      left-1
                      sm:left-2
                      md:left-4

                      top-1/2
                      -translate-y-1/2

                      w-10
                      h-10

                      sm:w-12
                      sm:h-12

                      rounded-full

                      bg-black/70
                      text-white

                      text-xl
                      sm:text-2xl

                      hover:bg-black
                      hover:opacity-90

                      active:opacity-50
                      active:scale-95

                      transition
                      duration-150

                      flex
                      items-center
                      justify-center

                      leading-none
                    "
                  >
                    ❮
                  </button>

                  {/* BOTÃO PRÓXIMO */}

                  <button
                    onClick={() => nextImage("p2")}
                    aria-label="Próxima imagem"
                    className="
                      absolute

                      right-1
                      sm:right-2
                      md:right-4

                      top-1/2
                      -translate-y-1/2

                      w-10
                      h-10

                      sm:w-12
                      sm:h-12

                      rounded-full

                      bg-black/70
                      text-white

                      text-xl
                      sm:text-2xl

                      hover:bg-black
                      hover:opacity-90

                      active:opacity-50
                      active:scale-95

                      transition
                      duration-150

                      flex
                      items-center
                      justify-center

                      leading-none
                    "
                  >
                    ❯
                  </button>
                </div>
              )}

              {/* ===================================================
                  CONTADOR - PROJETO 1
              =================================================== */}

              {openProject === "p1" && (
                <div className="flex justify-center items-center mt-6">
                  <span className="text-sm font-medium text-black">
                    {currentImage.p1 + 1} / {project1Images.length}
                  </span>
                </div>
              )}

              {/* ===================================================
                  CONTADOR - PROJETO 2
              =================================================== */}

              {openProject === "p2" && (
                <div className="flex justify-center items-center mt-6">
                  <span className="text-sm font-medium text-black">
                    {currentImage.p2 + 1} / {project2Images.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
