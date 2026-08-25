"use client";

import React from "react";
import tameImpala from "./tameimpala.webp";

export default function MusicCard({ dark }) {
  // ==========================================================
  // CONFIGURAÇÃO DA MÚSICA
  // ==========================================================

  const music = {
    artist: "Tame Impala",
    title: "Loser",
    album: "Deadbeat",
    cover: tameImpala,
    youtubeUrl: "https://www.youtube.com/watch?v=s3a4OQR-10M",
    lastPlayed: "End of Summer",
  };

  return (
    <div
      className={`
        group
        relative
        w-full

        overflow-hidden
        rounded-2xl

        border

        shadow-md
        hover:shadow-xl

        transition-all
        duration-300

        hover:-translate-y-1

        ${
          dark
            ? "bg-black border-white text-white"
            : "bg-white border-gray-200 text-black"
        }
      `}
    >
      {/* ======================================================
          DETALHE VERMELHO
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1.5
          bg-[#FF0000]
        "
      />

      {/* ======================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}

      <div
        className="
          flex
          items-stretch
          gap-3
          sm:gap-4

          p-3
          pl-5

          sm:p-4
          sm:pl-6

          md:gap-6
          md:p-6
          md:pl-8
        "
      >
        {/* ====================================================
            CAPA DO ÁLBUM
        ==================================================== */}

        <div
          className={`
            relative
            shrink-0

            w-[85px]
            h-[85px]

            sm:w-[105px]
            sm:h-[105px]

            md:w-[190px]
            md:h-[190px]

            overflow-hidden
            rounded-lg
            md:rounded-xl

            shadow-sm

            ${
              dark
                ? "bg-[#1a1a1a]"
                : "bg-gray-100"
            }
          `}
        >
          <img
            src={music.cover.src}
            alt={`Capa do álbum ${music.album}`}
            className="
              block

              w-full
              h-full

              object-cover

              transition-transform
              duration-500

              group-hover:scale-[1.03]
            "
          />

          {/* GRADIENTE */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent

              pointer-events-none
            "
          />

          {/* ÁLBUM */}

          <div
            className="
              absolute

              bottom-1.5
              left-2
              right-2

              md:bottom-3
              md:left-3
              md:right-3
            "
          >
            <p
              className="
                text-white
                text-[6px]

                md:text-[8px]

                uppercase
                tracking-[0.12em]
                md:tracking-[0.15em]

                drop-shadow-md
              "
            >
              Álbum
            </p>

            <p
              className="
                text-white

                text-[10px]
                md:text-sm

                font-semibold

                drop-shadow-md

                truncate
              "
            >
              {music.album}
            </p>
          </div>
        </div>

        {/* ====================================================
            CONTEÚDO DIREITO
        ==================================================== */}

        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col

            py-0
            sm:py-0.5
            md:py-1
          "
        >
          {/* ==================================================
              CABEÇALHO
          ================================================== */}

          <div
            className={`
              flex
              items-center
              justify-between

              pb-2
              md:pb-3

              border-b

              ${
                dark
                  ? "border-white/20"
                  : "border-gray-100"
              }
            `}
          >
            <div>
              <p
                className="
                  text-[7px]
                  md:text-[9px]

                  uppercase
                  tracking-[0.12em]
                  md:tracking-[0.15em]

                  text-gray-400
                "
              >
                YouTube Music
              </p>

              <p
                className={`
                  mt-0.5

                  text-[10px]
                  md:text-xs

                  font-semibold

                  ${
                    dark
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Now Playing
              </p>
            </div>

            {/* STATUS */}

            <span
              className="
                w-1.5
                h-1.5

                md:w-2
                md:h-2

                shrink-0

                rounded-full

                bg-[#FF0000]

                animate-pulse
              "
            />
          </div>

          {/* ==================================================
              INFORMAÇÕES DA MÚSICA
          ================================================== */}

          <div className="mt-2.5 md:mt-4">
            {/* ARTISTA */}

            <p
              className="
                text-[8px]
                md:text-[10px]

                uppercase
                tracking-[0.12em]
                md:tracking-[0.15em]

                text-[#FF0000]

                font-semibold
              "
            >
              {music.artist}
            </p>

            {/* NOME DA MÚSICA */}

            <h2
              className={`
                mt-0.5
                md:mt-1

                text-base
                md:text-2xl

                font-bold

                leading-tight

                truncate

                ${
                  dark
                    ? "text-white"
                    : "text-black"
                }
              `}
            >
              {music.title}
            </h2>
          </div>

          {/* ==================================================
              ÚLTIMA MÚSICA
          ================================================== */}

          <div
            className={`
              mt-2.5
              md:mt-4

              rounded-md
              md:rounded-lg

              border

              px-2
              py-1.5

              md:px-3
              md:py-2.5

              ${
                dark
                  ? "bg-[#151515] border-white/20"
                  : "bg-gray-50 border-gray-200"
              }
            `}
          >
            <p
              className="
                text-[6px]
                md:text-[8px]

                uppercase

                tracking-[0.12em]
                md:tracking-[0.15em]

                text-gray-400
              "
            >
              Última música
            </p>

            <p
              className={`
                mt-0.5

                text-[9px]
                md:text-xs

                font-medium

                truncate

                ${
                  dark
                    ? "text-gray-300"
                    : "text-gray-600"
                }
              `}
            >
              {music.lastPlayed}
            </p>
          </div>

          {/* ==================================================
              BOTÃO YOUTUBE
          ================================================== */}

          <a
            href={music.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3
              pt-2.5

              md:mt-5
              md:pt-4

              w-full

              inline-flex
              items-center
              justify-center
              gap-1.5
              md:gap-2

              rounded-full

              bg-[#FF0000]

              px-3
              py-2

              md:px-4
              md:py-2.5

              text-[10px]
              md:text-xs

              font-semibold

              text-white

              shadow-sm

              hover:bg-[#cc0000]
              hover:shadow-md

              active:scale-[0.98]

              transition-all
              duration-200
            "
          >
            <span
              className="
                text-xs
                md:text-sm

                leading-none
              "
            >
              →
            </span>

            Ouvir no YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
