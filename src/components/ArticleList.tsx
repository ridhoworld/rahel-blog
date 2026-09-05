import { Link } from "react-router-dom"

import { articles } from "../data/articles"

export default function ArticleList() {
  return (
    <aside className="w-full rounded-[1.25rem] border border-[#E7DADC] bg-[#FFFDFC]/90 p-3 shadow-[0_10px_40px_rgba(120,80,90,0.06)] backdrop-blur-sm sm:rounded-[1.5rem] sm:p-4">

      {/* Header */}
      <div className="mb-2 flex items-center justify-between px-2">
        <h2 className="text-[9px] font-semibold tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em]">
          ARTICLES
        </h2>

        <span className="text-[8px] text-black/40 sm:text-[9px]">
          {articles.length} POSTS
        </span>
      </div>

      {/* List */}
      <div className="article-scroll max-h-[190px] overflow-y-auto pr-1 sm:max-h-[210px] lg:max-h-[150px]">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            to={`/article/${article.slug}`}
            className="group block rounded-xl px-3 py-2.5 transition duration-200 hover:bg-[#F9F0F1] sm:py-2"
          >
            {/* Date */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-[7px] tracking-[0.12em] text-black/40 sm:text-[8px] sm:tracking-[0.15em]">
                {article.date}
              </span>

              <span className="shrink-0 text-[7px] text-black/30 sm:text-[8px]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-1 text-[11px] font-medium leading-snug transition-transform duration-200 group-hover:translate-x-1 sm:text-xs">
              {article.title}
            </h3>

            {/* Category */}
            <div className="mt-1 flex items-center gap-2 text-[7px] tracking-[0.08em] text-black/35 sm:text-[8px] sm:tracking-[0.1em]">
              <span>{article.category}</span>

              <span>·</span>

              <span>{article.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}