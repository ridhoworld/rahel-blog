import { Link } from "react-router-dom"

import SiteHeader from "../components/SiteHeader"
import ArticleList from "../components/ArticleList"
import { articles } from "../data/articles"

export default function Home() {
  const latestArticle = [...articles].sort(
    (a, b) => b.id - a.id
  )[0]

  return (
    <div className="relative min-h-screen bg-[#F9F3F3] text-[#3A3032] lg:h-screen lg:overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-[#E8D5D8]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-52 w-52 rounded-full bg-[#DCC2C7]/30 blur-3xl" />

      <SiteHeader />

      <main className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:flex lg:h-[calc(100vh-81px)] lg:flex-col lg:justify-center lg:px-10 lg:py-5">
        <section className="grid gap-10 lg:min-h-0 lg:flex-1 lg:grid-cols-[1fr_0.82fr] lg:gap-8">

          {/* ================= LEFT ================= */}
          <div className="relative flex flex-col justify-center">

            {/* Decorative flower */}
            <div className="absolute -left-2 top-1 hidden text-2xl text-[#A97882]/50 sm:block">
              ✿
            </div>

            {/* Greeting */}
            <p className="mb-4 pl-1 text-[9px] font-medium tracking-[0.3em] text-[#A97882] sm:text-[10px] sm:tracking-[0.35em]">
              HELLO, I'M RAHEL
            </p>

            {/* Main heading */}
            <h1 className="max-w-2xl font-serif text-[2.35rem] font-medium leading-[1.02] tracking-[-0.035em] text-[#3A3032] sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,5.5rem)]">
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
            <div className="mt-6 flex items-center gap-3 sm:mt-7">
              <span className="h-px w-10 bg-[#C79AA3] sm:w-12" />

              <span className="text-xs text-[#A97882]">
                ✦
              </span>

              <span className="h-px w-5 bg-[#E1C7CB] sm:w-6" />
            </div>

            {/* Introduction */}
            <div className="mt-5 max-w-xl sm:mt-6">
              <p className="drop-cap text-sm leading-6 text-[#3A3032]/65 sm:text-base sm:leading-7">
                Seorang pembelajar yang senang berjalan dan menjelajahi
                hal-hal baru. Bagi aku, setiap perjalanan dan ilmu yang
                didapat adalah bahan baku untuk memahami kehidupan.
                Ruang ini menjadi tempatku mendokumentasikan jejak,
                menuangkan gagasan murni, dan menuliskan cerita hidup
                dari sudut pandangku sendiri.
              </p>
            </div>

            {/* Latest article */}
            <Link
              to={`/article/${latestArticle.slug}`}
              className="group mt-6 flex w-fit items-center gap-3 text-[10px] font-medium tracking-[0.13em] text-[#7F5962] sm:text-xs sm:tracking-[0.15em]"
            >
              <span className="border-b border-[#A97882] pb-1">
                READ MY LATEST ARTICLE
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Bottom decoration */}
            <div className="mt-7 flex items-center gap-3 text-[#A97882]/50 sm:mt-8 sm:gap-4">
              <span className="text-base sm:text-lg">
                ♡
              </span>

              <span className="text-[8px] tracking-[0.25em] sm:text-[9px] sm:tracking-[0.3em]">
                PERSONAL JOURNAL
              </span>

              <span className="text-base sm:text-lg">
                ✦
              </span>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="grid min-h-0 gap-5 lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-4">

            {/* ================= PHOTO ================= */}
            <div className="relative">

              {/* Decorative frame */}
              <div className="absolute -inset-1.5 rounded-[1.7rem] border border-[#D9BBC0]/60 sm:-inset-2 sm:rounded-[2rem]" />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#E8D5D8] sm:aspect-[4/4.5] sm:rounded-[1.7rem] lg:aspect-auto lg:h-full lg:min-h-[360px]">

                <img
                  src="/profile1.jpeg"
                  alt="Rahel"
                  className="h-full w-full object-cover object-center"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A3032]/20 via-transparent to-transparent" />

                {/* Location */}
                <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-white/40 bg-[#FFFDFC]/85 px-3 py-1.5 text-[7px] tracking-[0.15em] text-[#5C464B] backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
                  BASED IN INDONESIA
                </div>

                {/* Decorative star */}
                <div className="absolute right-4 top-4 text-xl text-white/80 sm:right-5 sm:top-5 sm:text-2xl">
                  ✦
                </div>
              </div>
            </div>

            {/* ================= ARTICLES ================= */}
            <div className="relative">

              {/* Decorative heart */}
              <span className="absolute -right-1 -top-3 z-10 text-lg text-[#A97882]/60 sm:-right-2 sm:-top-4 sm:text-xl">
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