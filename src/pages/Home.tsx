import { Link } from "react-router-dom"

import SiteHeader from "../components/SiteHeader"
import ArticleList from "../components/ArticleList"
import { articles } from "../data/articles"

export default function Home() {
  const latestArticle = [...articles].sort(
    (a, b) => b.id - a.id
  )[0]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F9F3F3] text-[#3A3032] lg:h-screen lg:overflow-hidden">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full bg-[#E8D5D8]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[#DCC2C7]/30 blur-3xl" />

      <SiteHeader />

      <main className="relative mx-auto flex w-full max-w-6xl items-center px-6 py-8 sm:px-8 lg:h-[calc(100vh-81px)] lg:px-10 lg:py-4">

        <section className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">

          {/* ================= LEFT ================= */}
          <div className="relative min-w-0">

            {/* Greeting */}
            <div className="mb-3 flex items-center gap-2 text-[#A97882]">
              <span className="text-base leading-none text-[#A97882]/70" aria-hidden="true">
                ✿
              </span>

              <p className="text-[9px] font-medium tracking-[0.3em] sm:text-[10px] sm:tracking-[0.35em]">
                HELLO, I'M RAHEL
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl font-serif text-[2rem] font-medium leading-[1.02] tracking-[-0.035em] text-[#3A3032] sm:text-5xl md:text-6xl lg:text-[clamp(2.8rem,4vw,4.5rem)]">
              Mengarungi dunia,
              <br />
              menyerap hikmah,
              <br />
              <span className="italic text-[#A97882]">
                lalu menuliskannya
              </span>
              <br />
              <span className="text-[#3A3032]/80">
                dari sudut pandangku.
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C79AA3]" />

              <span className="text-xs text-[#A97882]">
                ✦
              </span>

              <span className="h-px w-5 bg-[#E1C7CB]" />
            </div>

            {/* Description */}
            <p className="drop-cap mt-4 max-w-lg text-sm leading-6 text-[#3A3032]/65">
              Seorang pembelajar yang senang berjalan dan menjelajahi
              hal-hal baru. Bagi aku, setiap perjalanan dan ilmu yang
              didapat adalah bahan baku untuk memahami kehidupan.
              Ruang ini menjadi tempatku mendokumentasikan jejak,
              menuangkan gagasan murni, dan menuliskan cerita hidup
              dari sudut pandangku sendiri.
            </p>

            {/* Latest article */}
            <Link
              to={`/article/${latestArticle.slug}`}
              className="group mt-4 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.13em] text-[#7F5962] sm:text-xs"
            >
              <span className="border-b border-[#A97882] pb-1">
                READ MY LATEST ARTICLE
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Bottom decoration */}
            <div className="mt-5 flex items-center gap-3 text-[#A97882]/50">
              <span className="text-base">
                ♡
              </span>

              <span className="text-[8px] tracking-[0.25em]">
                PERSONAL JOURNAL
              </span>

              <span className="text-base">
                ✦
              </span>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative min-w-0">

            {/* PHOTO */}
            <div className="relative">

              {/* Decorative frame */}
              <div className="absolute -inset-1.5 rounded-[1.5rem] border border-[#D9BBC0]/60" />

              <div className="relative h-[345px] w-full overflow-hidden rounded-[1.35rem] bg-[#E8D5D8]">

                <img
                  src="/profile1.jpeg"
                  alt="Rahel"
                  className="h-full w-full object-cover object-center"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A3032]/20 via-transparent to-transparent" />

                {/* Location */}
                <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-[#FFFDFC]/85 px-3 py-1.5 text-[7px] tracking-[0.15em] text-[#5C464B] backdrop-blur-md">
                  BASED IN INDONESIA
                </div>

                {/* Star */}
                <div className="absolute right-4 top-4 text-xl text-white/80">
                  ✦
                </div>

              </div>
            </div>

            {/* ARTICLES */}
            <div className="relative mt-3">

              <span className="absolute -right-1 -top-3 z-10 text-lg text-[#A97882]/60">
                ♡
              </span>

              <ArticleList />

            </div>

          </div>

        </section>
      </main>
    </div>
  )
}