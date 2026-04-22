import { NavLink } from 'react-router-dom'
import { MotionPage } from '../components/MotionPage.jsx'

export function NotFoundPage() {
  return (
    <MotionPage>
      <section className="relative z-10">
        <div className="container-shell py-16 sm:py-24">
          <div className="glass rounded-3xl p-8 sm:p-10">
            <div className="text-sm font-semibold text-black">
              404 — الصفحة غير موجودة
            </div>
            <div className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              يبدو أن الستارة أُغلقت هنا.
            </div>
            <div className="mt-4 text-sm leading-7 text-black">
              ارجع للصفحة الرئيسية أو انتقل إلى العروض.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <NavLink className="btn-primary" to="/">
                الصفحة الرئيسية
              </NavLink>
              <NavLink className="btn-ghost" to="/العروض">
                العروض
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </MotionPage>
  )
}

