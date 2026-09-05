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

        <main className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <h1 className="font-serif text-3xl font-medium sm:text-4xl">
            Article not found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block border-b border-[#A97882] pb-1 text-sm text-[#7F5962]"
          >
            ← Back to home
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F9F3F3] text-[#3A3032]">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">

        {/* Back */}
        <Link
          to="/"
          className="text-[9px] tracking-[0.18em] text-black/40 transition hover:text-black sm:text-xs sm:tracking-[0.2em]"
        >
          ← BACK HOME
        </Link>

        {/* Article header */}
        <div className="mt-12 max-w-5xl sm:mt-16">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 text-[8px] tracking-[0.15em] text-black/40 sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
            <span>{article.date}</span>

            <span>·</span>

            <span>{article.category}</span>

            <span>·</span>

            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/50 sm:mt-8 sm:text-lg sm:leading-8">
            {article.excerpt}
          </p>
        </div>

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-[1.5rem] sm:mt-14 sm:rounded-[2rem]">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
          />
        </div>

        {/* Content */}
        <article className="mx-auto mt-12 max-w-2xl sm:mt-16">

          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-6 text-base leading-8 text-black/75 sm:mb-7 sm:text-lg sm:leading-9 ${
                index === 0 ? "drop-cap" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* Footer navigation */}
        <div className="mx-auto mt-12 max-w-2xl border-t border-black/10 pt-7 sm:mt-16 sm:pt-8">
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