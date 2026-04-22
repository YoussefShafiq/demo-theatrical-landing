import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-semibold transition',
    isActive
      ? 'bg-red-800 text-white'
      : 'text-stone-800/80 hover:text-stone-950',
  ].join(' ')

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-stone-50 text-stone-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(127,29,29,0.12)_0%,rgba(250,250,249,0)_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(250,250,249,1))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-red-900/10 bg-white/80 backdrop-blur-xl">
        <div className="container-shell flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="group flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-stone-950/5"
          >
            <motion.span
              initial={false}
              whileHover={{ rotate: -8, scale: 1.05 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-red-900 to-red-700 text-white shadow-[0_16px_34px_-18px_rgba(127,29,29,0.75)]"
              aria-hidden="true"
            >
              س
            </motion.span>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-stone-950">
                سِتارة
              </div>
              <div className="text-xs text-stone-700/70">
                عروض مسرحية — حجز وتنظيم
              </div>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 sm:flex">
            <NavLink to="/نبذة" className={navLinkClass}>
              نبذة
            </NavLink>
            <NavLink to="/العروض" className={navLinkClass}>
              العروض
            </NavLink>
            <NavLink to="/تواصل" className={navLinkClass}>
              تواصل
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn-ghost hidden sm:inline-flex" href="#عرض">
              اطلب عرضًا
            </a>
            <NavLink className="btn-primary" to="/تواصل">
              احجز مكالمة
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="relative z-10 border-t border-red-900/10">
        <div className="container-shell py-10">
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-base font-extrabold text-stone-950">
                  جاهز تفتح الستارة؟
                </div>
                <div className="mt-1 text-sm text-stone-700/80">
                  صفحة هبوط سريعة، عربية، وحديثة — مناسبة لعرضك على العميل.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <NavLink className="btn-primary" to="/تواصل">
                  ابدأ الآن
                </NavLink>
                <NavLink className="btn-ghost" to="/العروض">
                  شاهد الأعمال
                </NavLink>
              </div>
            </div>
            <div className="mt-6 text-xs text-stone-700/70">
              © {new Date().getFullYear()} سِتارة. كل الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

