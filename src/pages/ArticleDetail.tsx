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

      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">

        {/* Back */}
        <Link
          to="/"
          className="inline-block text-[9px] tracking-[0.18em] text-black/40 transition hover:text-[#7F5962] sm:text-xs sm:tracking-[0.2em]"
        >
          ← BACK HOME
        </Link>

        {/* Header */}
        <header className="mt-10 sm:mt-14 lg:mt-16">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] tracking-[0.13em] text-black/40 sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
            <span>{article.date}</span>

            <span>·</span>

            <span>{article.category}</span>

            <span>·</span>

            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-5xl font-serif text-[2.35rem] font-medium leading-[0.98] tracking-[-0.04em] sm:mt-6 sm:text-5xl sm:leading-[0.96] md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/50 sm:mt-8 sm:text-lg sm:leading-8">
            {article.excerpt}
          </p>
        </header>

        {/* Hero image */}
        <div className="mt-9 overflow-hidden rounded-[1.25rem] sm:mt-12 sm:rounded-[1.75rem] lg:mt-14 lg:rounded-[2rem]">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[4/3] h-auto w-full object-cover sm:aspect-[16/9]"
          />
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