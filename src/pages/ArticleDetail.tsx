import { Link, useParams } from "react-router-dom"

import SiteHeader from "../components/SiteHeader"
import { articles } from "../data/articles"

export default function ArticleDetail() {
  const { slug } = useParams()

  const article = articles.find(
    (item) => item.slug === slug
  )

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F9F3F3] text-[#3A3032]">
        <SiteHeader />

        <main className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <h1 className="font-serif text-3xl font-medium sm:text-4xl">
            Article not found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block border-b border-[#A97882] pb-1 text-sm text-[#7F5962]"
          >
            ← BACK TO HOME
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F9F3F3] text-[#3A3032]">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">

        {/* Back */}
        <Link
          to="/"
          className="inline-block text-[9px] tracking-[0.18em] text-black/40 transition hover:text-[#7F5962] sm:text-xs sm:tracking-[0.2em]"
        >
          ← BACK HOME
        </Link>

        {/* Header and hero image */}
        <div className="mt-10 grid items-end gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.72fr)] lg:gap-16">
          <header>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] tracking-[0.13em] text-[#A97882] sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
              <span aria-hidden="true">✿</span>
              <span>{article.date}</span>

              <span className="text-black/25">·</span>

              <span>{article.category}</span>

              <span className="text-black/25">·</span>

              <span>{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-3xl font-serif text-[2.7rem] font-medium leading-[0.96] tracking-[-0.04em] sm:mt-6 sm:text-6xl sm:leading-[0.94] lg:text-7xl xl:text-[5.5rem]">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 max-w-xl text-base leading-7 text-black/55 sm:mt-8 sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3 text-[#A97882]/70 sm:mt-10">
              <span className="h-px w-12 bg-[#C79AA3]" />
              <span className="text-xs">✦</span>
              <span className="text-[8px] tracking-[0.2em]">A PERSONAL NOTE</span>
            </div>
          </header>

          <figure className="relative lg:justify-self-end lg:max-w-[380px]">
            <div className="absolute -inset-2 rounded-[1.7rem] border border-[#D9BBC0]/70 sm:-inset-3 sm:rounded-[2rem]" />

            <div className="relative overflow-hidden rounded-[1.35rem] bg-[#3A3032] shadow-[0_18px_50px_rgba(91,60,67,0.16)] sm:rounded-[1.7rem]">
              <img
                src={article.image}
                alt={article.title}
                className="aspect-[4/5] h-auto w-full object-cover object-[30%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#24191b]/40 via-transparent to-white/5" />

              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[8px] tracking-[0.16em] text-white/80 sm:bottom-5 sm:left-5 sm:right-5">
                <span>ON THE WAY</span>
                <span aria-hidden="true">✦</span>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Article content */}
        <article className="mx-auto mt-10 max-w-2xl sm:mt-14 lg:mt-16">

          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-6 text-[15px] leading-7 text-black/75 sm:mb-7 sm:text-lg sm:leading-9 ${
                index === 0 ? "drop-cap" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* Bottom navigation */}
        <div className="mx-auto mt-10 max-w-2xl border-t border-black/10 pt-7 sm:mt-14 sm:pt-8">
          <Link
            to="/"
            className="text-xs font-medium text-[#7F5962] transition hover:opacity-50 sm:text-sm"
          >
            ← BACK TO ALL ARTICLES
          </Link>
        </div>
      </main>
    </div>
  )
}