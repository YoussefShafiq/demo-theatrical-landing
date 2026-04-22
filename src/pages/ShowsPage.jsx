import { NavLink } from 'react-router-dom'
import { MotionPage } from '../components/MotionPage.jsx'

const shows = [
  {
    title: 'ليلة على المسرح',
    tag: 'قصة + إضاءة سينمائية',
    desc: 'مزيج بين السرد الحي والموسيقى الخفيفة، مناسب لفعاليات الشركات.',
  },
  {
    title: 'مرايا المدينة',
    tag: 'دراما قصيرة',
    desc: 'إيقاع سريع وشخصيات واضحة — “رسالة” تصل بدون وعظ.',
  },
  {
    title: 'ضحكة الستارة',
    tag: 'كوميديا راقية',
    desc: 'خفيفة ومناسبة للجمهور العام، مع تفاعل بسيط في بعض اللقطات.',
  },
]

function Card({ title, tag, desc }) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-black tracking-tight text-stone-950">
            {title}
          </div>
          <div className="mt-1 text-xs font-semibold text-stone-700/75">
            {tag}
          </div>
        </div>
        <div className="rounded-full border border-red-900/10 bg-white px-3 py-1 text-xs font-semibold text-stone-800/80">
          متاح
        </div>
      </div>
      <div className="mt-4 text-sm leading-7 text-stone-700/85">{desc}</div>
      <div className="mt-6 flex gap-3">
        <NavLink className="btn-primary" to="/تواصل">
          احجز
        </NavLink>
        <a className="btn-ghost" href="#تفاصيل">
          تفاصيل
        </a>
      </div>
    </div>
  )
}

export function ShowsPage() {
  return (
    <MotionPage>
      <section className="relative z-10">
        <div className="container-shell py-14 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
                العروض
              </h1>
              <p className="mt-3 text-sm leading-7 text-stone-700/85">
                باقة عروض متنوعة للفعاليات. اختر العرض الأقرب لرسالة الحدث
                وسنقترح لك أفضل مدة وتنسيق للمكان.
              </p>
            </div>
            <NavLink className="btn-ghost" to="/تواصل">
              اطلب قائمة مخصصة
            </NavLink>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {shows.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>

          <div id="تفاصيل" className="mt-10 glass rounded-3xl p-6 sm:p-8">
            <div className="text-base font-extrabold text-stone-950">
              ما الذي يشمله الحجز عادةً؟
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-stone-700/85 sm:grid-cols-2">
              <li className="rounded-2xl border border-red-900/10 bg-white p-4">
                تنسيق مع المكان + قائمة متطلبات
              </li>
              <li className="rounded-2xl border border-red-900/10 bg-white p-4">
                إدارة وقت وبروفات يوم العرض
              </li>
              <li className="rounded-2xl border border-red-900/10 bg-white p-4">
                اقتراح موسيقى/إضاءة حسب نوع العرض
              </li>
              <li className="rounded-2xl border border-red-900/10 bg-white p-4">
                خيار تخصيص خفيف للنص حسب رسالتك
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MotionPage>
  )
}

