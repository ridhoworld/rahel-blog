import { Link } from "react-router-dom"

import SiteHeader from "../components/SiteHeader"
import ArticleList from "../components/ArticleList"
import { articles } from "../data/articles"

export default function Home() {
  const latestArticle = [...articles].sort(
    (a, b) => b.id - a.id
  )[0]

  return (
    <div className="relative h-screen overflow-hidden bg-[#F9F3F3] text-[#3A3032]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-[#E8D5D8]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-52 w-52 rounded-full bg-[#DCC2C7]/30 blur-3xl" />

      <SiteHeader />

      <main className="relative mx-auto flex h-[calc(100vh-81px)] max-w-7xl flex-col justify-center px-6 py-5 lg:px-10">
        <section className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1fr_0.82fr]">

          {/* ================= LEFT ================= */}
          <div className="relative flex min-h-0 flex-col justify-center">

            {/* Small decorative flower */}
            <div className="absolute -left-2 top-4 hidden text-2xl text-[#A97882]/50 sm:block">
              ✿
            </div>

            {/* Greeting */}
            <p className="mb-4 pl-1 text-[10px] font-medium tracking-[0.35em] text-[#A97882] sm:text-xs">
              HELLO, I'M RAHEL
            </p>

            {/* Main heading */}
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-[#3A3032] sm:text-5xl lg:text-6xl">
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
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C79AA3]" />

              <span className="text-xs text-[#A97882]">
                ✦
              </span>

              <span className="h-px w-6 bg-[#E1C7CB]" />
            </div>

            {/* Introduction */}
            <div className="mt-5 max-w-xl">
              <p className="drop-cap text-sm leading-6 text-[#3A3032]/65 sm:text-base sm:leading-7">
                Seorang pembelajar yang senang berjalan dan menjelajahi hal-hal baru. Bagi aku, setiap perjalanan dan ilmu yang didapat adalah bahan baku untuk memahami kehidupan. Ruang ini menjadi tempatku mendokumentasikan jejak, menuangkan gagasan murni, dan menuliskan cerita hidup dari sudut pandangku sendiri.
              </p>
            </div>

            {/* Latest article */}
            <Link
              to={`/article/${latestArticle.slug}`}
              className="group mt-6 flex w-fit items-center gap-3 text-xs font-medium tracking-[0.15em] text-[#7F5962]"
            >
              <span className="border-b border-[#A97882] pb-1">
                READ MY LATEST ARTICLE
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Bottom decoration */}
            <div className="mt-8 flex items-center gap-4 text-[#A97882]/50">
              <span className="text-lg">
                ♡
              </span>

              <span className="text-[9px] tracking-[0.3em]">
                PERSONAL JOURNAL
              </span>

              <span className="text-lg">
                ✦
              </span>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">

            {/* ================= PHOTO ================= */}
            <div className="relative min-h-0">

              {/* Decorative frame */}
              <div className="absolute -inset-2 rounded-[2rem] border border-[#D9BBC0]/60" />

              <div className="relative h-full min-h-[400px] overflow-hidden rounded-[1.7rem] bg-[#E8D5D8]">

                <img
                  src="/profile1.jpeg"
                  alt="Rahel"
                  className="h-full w-full object-cover object-center"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A3032]/20 via-transparent to-transparent" />

                {/* Location pill */}
                <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-[#FFFDFC]/85 px-4 py-2 text-[9px] tracking-[0.2em] text-[#5C464B] backdrop-blur-md">
                  BASED IN INDONESIA
                </div>

                {/* Decorative star */}
                <div className="absolute right-5 top-5 text-2xl text-white/80">
                  ✦
                </div>
              </div>
            </div>

            {/* ================= ARTICLES ================= */}
            <div className="relative">

              {/* Tiny decorative element */}
              <span className="absolute -right-2 -top-4 z-10 text-xl text-[#A97882]/60">
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