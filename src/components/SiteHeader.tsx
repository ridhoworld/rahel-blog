import { Link } from "react-router-dom"

export default function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.3em]"
        >
          RAHEL
        </Link>

        <div className="text-xs tracking-[0.2em] text-black/50">
          PERSONAL JOURNAL
        </div>
      </div>
    </header>
  )
}