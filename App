"use client";

import { useState } from "react";
import Image from "next/image";
import avatar from "./avatar.jpeg";
import avatarPreto from "./avatarpreto.jpeg";
import Projetos from "./projetos";
import MusicCard from "./MusicCard";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-[#f5efe6] text-black"
      }
    >
      {/* =========================
          HEADER
      ========================= */}

      <header className="flex justify-between items-center px-8 md:px-16 py-4 md:py-6">
        <div
          className={`
            ${fredoka.className}
            flex
            items-center
            gap-2
            text-5xl
            md:text-6xl
            font-bold
            tracking-tight
            text-[#FFB6C1]
          `}
        >
          <h1>Mel</h1>

          <span
            aria-hidden="true"
            className="text-4xl md:text-5xl leading-none text-[#FFB6C1]"
          >
            ♥
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <a
            href="/MelissaSantana2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              px-3
              py-1
              rounded
              hover:bg-black
              hover:text-white
              transition
              duration-300
            "
          >
            CV
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="text-2xl"
            aria-label="Alternar modo escuro"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* =========================
          MENU
      ========================= */}

      <div
        className="
          flex
          justify-center
          mb-10

          /* MOBILE */
          px-5

          /* DESKTOP */
          md:px-16
        "
      >
        <nav
          className={`
            flex
            items-center
            justify-center
            rounded-full

            /* =================================
               CONTROLE DO MOBILE
               ================================= */

            w-[300px]
            max-w-auto

            gap-1
            p-1.5

            /* =================================
               CONTROLE DO DESKTOP
               NÃO ALTERA O DESKTOP
               ================================= */

            md:w-auto
            md:max-w-none
            md:gap-2
            md:p-2

            ${dark ? "bg-[#1f1f1f]" : "bg-[#e6dccf]"}
          `}
        >
          {/* =========================
              ALL
          ========================= */}

          <button
            onClick={() => setFilter("all")}
            className={`
              rounded-full
              transition-all
              duration-300

              /* MOBILE */
              flex-1
              px-3
              py-2.5
              text-sm

              /* DESKTOP */
              md:flex-none
              md:px-6
              md:py-3
              md:text-base

              ${
                filter === "all"
                  ? dark
                    ? "bg-white text-black"
                    : "bg-white text-black shadow"
                  : "bg-transparent"
              }
            `}
          >
            All
          </button>

          {/* =========================
              ABOUT
          ========================= */}

          <button
            onClick={() => setFilter("about")}
            className={`
              rounded-full
              transition-all
              duration-300

              /* MOBILE */
              flex-1
              px-3
              py-2.5
              text-sm

              /* DESKTOP */
              md:flex-none
              md:px-6
              md:py-3
              md:text-base

              ${
                filter === "about"
                  ? dark
                    ? "bg-white text-black"
                    : "bg-white text-black shadow"
                  : "bg-transparent"
              }
            `}
          >
            About
          </button>

          {/* =========================
              PROJECTS
          ========================= */}

          <button
            onClick={() => setFilter("projects")}
            className={`
              rounded-full
              transition-all
              duration-300

              /* MOBILE */
              flex-1
              px-3
              py-2.5
              text-sm

              /* DESKTOP */
              md:flex-none
              md:px-6
              md:py-3
              md:text-base

              ${
                filter === "projects"
                  ? dark
                    ? "bg-white text-black"
                    : "bg-white text-black shadow"
                  : "bg-transparent"
              }
            `}
          >
            Projects
          </button>

          {/* =========================
              PERSONAL
          ========================= */}

          <button
            onClick={() => setFilter("personal")}
            className={`
              rounded-full
              transition-all
              duration-300

              /* MOBILE */
              flex-1
              px-3
              py-2.5
              text-sm

              /* DESKTOP */
              md:flex-none
              md:px-6
              md:py-3
              md:text-base

              ${
                filter === "personal"
                  ? dark
                    ? "bg-white text-black"
                    : "bg-white text-black shadow"
                  : "bg-transparent"
              }
            `}
          >
            Personal
          </button>
        </nav>
      </div>

      {/* =========================
          GRID PRINCIPAL
      ========================= */}

      <main
        className="
          grid
          grid-cols-2
          gap-5
          px-5
          md:px-16
          pb-10
        "
      >
        {/* =========================
            SOBRE MIM
        ========================= */}

        {(filter === "all" || filter === "about") && (
          <section
            className={`
              col-span-2
              w-full
              rounded-2xl
              shadow-lg
              p-6
              md:p-8
              transition-all
              duration-300

              ${
                dark
                  ? "bg-black text-white border border-white"
                  : "bg-white text-black"
              }
            `}
          >
            <div
              className="
                flex
                flex-col
                md:flex-row
                items-center
                md:items-center
                gap-7
                md:gap-10
              "
            >
              {/* FOTO AVATAR */}

              <div
                className="
                  shrink-0
                  w-full
                  md:w-[220px]

                  flex
                  items-center
                  justify-center

                  order-1
                  md:order-1
                "
              >
                <Image
                  src={dark ? avatarPreto : avatar}
                  alt="Foto de perfil da Mel"
                  width={220}
                  height={220}
                  priority
                  className="
                    w-[180px]
                    h-[180px]

                    sm:w-[200px]
                    sm:h-[200px]

                    md:w-[200px]
                    md:h-[200px]

                    object-contain
                    rounded-full
                  "
                />
              </div>

              {/* ABOUT ME + TEXTO */}

              <div
                className="
                  flex-1
                  w-full

                  order-2
                  md:order-2

                  text-center
                  md:text-left
                "
              >
                <h2 className="text-2xl font-bold mb-3">
                  About me
                </h2>

                <p className="text-[16px] leading-7">
                  I&apos;m a developer from Brazil with an interest in
                  JavaScript, design, startups, and music.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* =========================
            MUSIC
        ========================= */}

        {(filter === "all" || filter === "personal") && (
          <section className="col-span-2 w-full">
            <div className="w-full">
              <MusicCard dark={dark} />
            </div>
          </section>
        )}

        {/* =========================
            GITHUB
        ========================= */}

        {(filter === "all" || filter === "personal") && (
          <a
            href="https://github.com/melissasantana1"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              col-span-1
              w-full
              rounded-2xl
              min-h-[120px]
              md:min-h-[180px]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-[1.02]
              ${dark ? "bg-black border border-gray-500" : "bg-black"}
            `}
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={170}
              height={170}
              className="object-contain w-[85px] md:w-[140px]"
            />
          </a>
        )}

        {/* =========================
            LINKEDIN
        ========================= */}

        {(filter === "all" || filter === "personal") && (
          <a
            href="https://www.linkedin.com/in/melissa-santana-3b5918249/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              col-span-1
              w-full
              rounded-2xl
              min-h-[120px]
              md:min-h-[180px]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-[1.02]
              ${dark ? "bg-black border border-gray-500" : "bg-[#0077B5]"}
            `}
          >
            <Image
              src="/black.png"
              alt="LinkedIn"
              width={220}
              height={220}
              className="object-contain w-[95px] md:w-[160px] h-auto"
            />
          </a>
        )}

        {/* =========================
            PROJETOS
        ========================= */}

        <section className="col-span-2 w-full">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              w-full
            "
          >
            <Projetos dark={dark} filter={filter} />
          </div>
        </section>
      </main>
    </div>
  );
}
