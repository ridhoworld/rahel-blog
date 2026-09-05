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
      <div className="min-h-screen bg-[#f7f7f5]">
        <SiteHeader />

        <main className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-4xl font-medium">
            Article not found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block border-b border-black pb-1 text-sm"
          >
            ← Back to home
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12 lg:px-10 lg:py-20">

        <Link
          to="/"
          className="text-xs tracking-[0.2em] text-black/40 transition hover:text-black"
        >
          ← BACK HOME
        </Link>

        <div className="mt-16 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] text-black/40">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem]">
          <img
            src={article.image}
            alt={article.title}
            className="h-[400px] w-full object-cover sm:h-[550px]"
          />
        </div>

        <article className="mx-auto mt-16 max-w-2xl">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-7 text-lg leading-9 text-black/75 ${
                index === 0 ? "drop-cap" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mx-auto mt-16 max-w-2xl border-t border-black/10 pt-8">
          <Link
            to="/"
            className="text-sm font-medium hover:opacity-50"
          >
            ← BACK TO ALL ARTICLES
          </Link>
        </div>

      </main>
    </div>
  )
}