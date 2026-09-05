import { Link } from "react-router-dom"

export default function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
        <Link
          to="/"
          className="text-xs font-semibold tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]"
        >
          RAHEL
        </Link>

        <div className="text-[8px] tracking-[0.15em] text-black/40 sm:text-[10px] sm:tracking-[0.2em]">
          PERSONAL JOURNAL
        </div>
      </div>
    </header>
  )
}