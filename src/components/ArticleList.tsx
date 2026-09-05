import { Link } from "react-router-dom"
import { articles } from "../data/articles"

export default function ArticleList() {
  return (
    <aside className="rounded-[1.5rem] border border-[#E7DADC] bg-[#FFFDFC]/90 p-4 shadow-[0_10px_40px_rgba(120,80,90,0.06)]">

      <div className="mb-2 flex items-center justify-between px-2">
        <h2 className="text-[10px] font-semibold tracking-[0.2em]">
          ARTICLES
        </h2>

        <span className="text-[9px] text-black/40">
          {articles.length} POSTS
        </span>
      </div>

      <div className="article-scroll max-h-[145px] overflow-y-auto pr-1">

        {articles.map((article, index) => (
          <Link
            key={article.id}
            to={`/article/${article.slug}`}
            className="group block rounded-xl px-3 py-2 transition hover:bg-[#F9F0F1]"
          >

            <div className="flex items-center justify-between">
              <span className="text-[8px] tracking-[0.15em] text-black/40">
                {article.date}
              </span>

              <span className="text-[8px] text-black/30">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-1 text-xs font-medium leading-snug transition group-hover:translate-x-1">
              {article.title}
            </h3>

            <div className="mt-1 flex gap-2 text-[8px] tracking-[0.1em] text-black/35">
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