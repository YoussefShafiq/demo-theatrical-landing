import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MotionPage } from '../components/MotionPage.jsx'
import heroStage from '../assets/hero-stage.svg'
import illCurtain from '../assets/ill-curtain.svg'
import illSpotlight from '../assets/ill-spotlight.svg'
import illTicket from '../assets/ill-ticket.svg'

const glow = 'shadow-[0_28px_90px_-60px_rgba(127,29,29,0.55)]'

const sectionPhotos = {
  hero:
    'https://images.unsplash.com/photo-1560184611-5b5749138c3c?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  why:
    'https://images.unsplash.com/photo-1560184611-5b5749138c3c?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  booking:
    'https://plus.unsplash.com/premium_photo-1664302664794-8709891cd070?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  pricing:
    'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   ',
  testimonials:
    'https://plus.unsplash.com/premium_photo-1683133282099-18e50c9b56b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  faqs:
    'https://plus.unsplash.com/premium_photo-1664303116341-60193acec5a1?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

function Icon({ name }) {
  const common = 'h-4 w-4'
  switch (name) {
    case 'spark':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2l1.4 5.2L18.6 9 13.4 10.4 12 15.6 10.6 10.4 5.4 9l5.2-1.8L12 2Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M19 12l.8 2.6 2.2.7-2.2.7L19 18.6l-.8-2.6-2.2-.7 2.2-.7L19 12Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      )
    case 'calendar':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 3v2M17 3v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 7h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 5h10a3 3 0 0 1 3 3v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8.5 11.5h2M13.5 11.5h2M8.5 15.5h2M13.5 15.5h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      )
    case 'ticket':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M13 8.5v7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 4"
            opacity="0.9"
          />
        </svg>
      )
    case 'chat':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7 19l-3 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H10l-3 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 9h8M8 12h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      )
    default:
      return null
  }
}

function SectionMedia({ src, alt, icon, caption }) {
  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl border border-red-900/10 bg-stone-950/95">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-40 w-full object-cover opacity-85 sm:h-48"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(12,10,9,0.65),rgba(12,10,9,0.05))]" />
      <div className="absolute inset-0 p-5 sm:p-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-stone-100/90 backdrop-blur">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-red-700/25 text-red-200">
            <Icon name={icon} />
          </span>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: 'مدير فعالية — شركة تقنية',
    quote:
      'تجربة منظمة من البداية للنهاية. الجمهور ظل متفاعل، والرسالة وصلت بدون مبالغة.',
  },
  {
    name: 'منسقة علاقات عامة — فندق',
    quote:
      'الالتزام بالمواعيد والتفاصيل كان ممتاز. الإضاءة والموسيقى طلّعت العرض “فخم”.',
  },
  {
    name: 'مؤسس مساحة ثقافية',
    quote:
      'نص قوي وإخراج نظيف. الفريق يعرف كيف يوازن بين الفن والتجربة التجارية.',
  },
]

const faqs = [
  {
    q: 'هل العروض مناسبة لفعاليات الشركات؟',
    a: 'نعم. عندنا عروض قابلة للتخصيص حسب الرسالة والجمهور والمدة، مع توازن بين المتعة والهدف.',
  },
  {
    q: 'كم تستغرق مدة التحضير؟',
    a: 'يعتمد على نوع العرض، لكن غالبًا نحتاج من 7 إلى 14 يومًا للتحضير الكامل وتنسيق المسرح.',
  },
  {
    q: 'هل توفرون الصوت والإضاءة؟',
    a: 'نقدر نوفرها أو ننسّق مع فريق المكان. بنرسل قائمة متطلبات واضحة قبل التنفيذ.',
  },
  {
    q: 'هل يمكن تنفيذ العرض خارج المدينة؟',
    a: 'نعم، مع ترتيبات السفر واللوجستيات. بنقترح خطة مناسبة حسب جدولك.',
  },
]

function Stat({ label, value }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-2xl font-extrabold tracking-tight text-stone-950">
        {value}
      </div>
      <div className="mt-1 text-sm text-stone-700/80">{label}</div>
    </div>
  )
}

function Feature({ title, description, imageSrc, imageAlt, icon }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="text-base font-extrabold text-stone-950">{title}</div>
        <div className="grid h-9 w-9 place-items-center rounded-2xl border border-red-900/10 bg-white text-red-900/75">
          <Icon name={icon} />
        </div>
      </div>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="mt-4 h-28 w-full rounded-2xl border border-red-900/10 bg-white object-cover"
        />
      ) : null}
      <div className="mt-2 text-sm leading-7 text-stone-700/80">
        {description}
      </div>
    </div>
  )
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <div className="text-2xl font-black tracking-tight text-stone-950 sm:text-3xl">
        {title}
      </div>
      {subtitle ? (
        <div className="mt-2 text-sm leading-7 text-stone-700/80">{subtitle}</div>
      ) : null}
    </div>
  )
}

function PriceCard({ title, price, items, featured }) {
  return (
    <div
      className={[
        'glass rounded-3xl p-6 sm:p-8',
        featured ? 'ring-2 ring-red-900/10' : '',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-extrabold text-stone-950">{title}</div>
          <div className="mt-1 text-sm text-stone-700/80">{price}</div>
        </div>
        {featured ? (
          <div className="rounded-full bg-red-800 px-3 py-1 text-xs font-extrabold text-white">
            الأكثر طلبًا
          </div>
        ) : null}
      </div>
      <ul className="mt-6 grid gap-3 text-sm text-stone-800/85">
        {items.map((it) => (
          <li
            key={it}
            className="rounded-2xl border border-red-900/10 bg-white p-4"
          >
            {it}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <NavLink className="btn-primary" to="/تواصل">
          اطلب هذه الباقة
        </NavLink>
        <NavLink className="btn-ghost" to="/تواصل">
          استشارة مجانية
        </NavLink>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  return (
    <details className="glass rounded-2xl p-5">
      <summary className="cursor-pointer select-none text-sm font-extrabold text-stone-950">
        {q}
      </summary>
      <div className="mt-3 text-sm leading-7 text-stone-700/85">{a}</div>
    </details>
  )
}

export function HomePage() {
  return (
    <MotionPage>
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://tse2.mm.bing.net/th/id/OIP.GeISgPi7dyg4SROYmRyrZgHaE8?w=612&h=408&rs=1&pid=ImgDetMain&o=7&rm=3')] bg-cover bg-center" />

        <div className="container-shell py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-900/10 bg-white/80 px-4 py-2 text-xs font-semibold text-stone-800/80"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-red-800/10 text-red-900">
                  <Icon name="spark" />
                </span>
                عروض مسرحية للفعاليات — تنظيم كامل
              </motion.div>

              <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-stone-100 sm:text-5xl">
                افتح الستارة.
                <span className="block text-red-400">واجعل الحضور يعيش القصة.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone-300/80">
                عروض حيّة بتجربة كلاسيكية أنيقة: نص قوي، إخراج بصري، وتنفيذ منظم
                يناسب فعاليات الشركات والفنادق والمساحات الثقافية.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <NavLink className="btn-primary" to="/تواصل">
                  <Icon name="chat" />
                  اطلب عرض سعر
                </NavLink>
                <a className="btn-ghost" href="#عرض">
                  <Icon name="calendar" />
                  احجز موعد العرض
                </a>
                <NavLink className="link text-sm font-semibold" to="/العروض">
                  استعرض العروض ←
                </NavLink>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <Stat label="زمن الرد" value="24 ساعة" />
                <Stat label="مدة العروض" value="45–60 دقيقة" />
                <Stat label="تنفيذ" value="منظم" />
              </div>
            </div>

            <div className="relative">
              <div className={`glass ${glow} rounded-3xl p-6 sm:p-8`}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold text-stone-950">
                    بطاقة العرض
                  </div>
                  <div className="text-xs text-stone-700/70">حجز متاح</div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-red-900/10 bg-[linear-gradient(to_left,rgba(127,29,29,0.08),rgba(255,255,255,0.85))] p-5">
                    <div className="text-sm font-extrabold text-stone-950">
                      “ليلة على المسرح”
                    </div>
                    <div className="mt-1 text-xs text-stone-700/80">
                      عرض قصصي بإخراج بصري وإضاءة سينمائية
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      {['تمثيل', 'إضاءة', 'موسيقى', 'إخراج'].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-red-900/10 bg-white px-3 py-1 text-stone-800/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-2xl p-5">
                      <div className="text-xs text-stone-700/70">السعة</div>
                      <div className="mt-1 text-lg font-extrabold text-stone-950">
                        120+ مقعد
                      </div>
                    </div>
                    <div className="glass rounded-2xl p-5">
                      <div className="text-xs text-stone-700/70">المدة</div>
                      <div className="mt-1 text-lg font-extrabold text-stone-950">
                        55 دقيقة
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-5">
                    <div className="text-xs text-stone-700/70">
                      لماذا تختار هذا العرض؟
                    </div>
                    <div className="mt-2 text-sm leading-7 text-stone-800/80">
                      لأنه يجمع بين السرد والتمثيل مع إضاءة وموسيقى محسوبة — مناسب
                      لفعاليات تحتاج “أثر” واضح وتفاعل حقيقي.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(127,29,29,0.16)_0%,rgba(250,250,249,0)_65%)] blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-red-900/10">
        <div className="container-shell py-14 sm:py-20">
          <SectionMedia
            src={sectionPhotos.why}
            alt="خشبة مسرح بإضاءة حمراء وأجواء عرض"
            icon="spark"
            caption="لمسة مسرح حقيقية — هوية راقية"
          />

          <SectionTitle
            title="لماذا تختار سِتارة؟"
            subtitle="عروض مصممة لتناسب المكان والجمهور — مع تنظيم دقيق وواجهة حجز واضحة."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <Feature
              title="هوية كلاسيكية"
              description="أحمر “ستارة” على أبيض نظيف — إحساس مسرح فعلي بدون زحام بصري."
              imageSrc={illCurtain}
              imageAlt="رسم توضيحي لستارة مسرح"
              icon="spark"
            />
            <Feature
              title="حجز مُرتّب"
              description="خطوات واضحة: اختر العرض → حدّد التاريخ والمكان → ننسّق المتطلبات → تنفيذ."
              imageSrc={illTicket}
              imageAlt="رسم توضيحي لتذكرة مسرح"
              icon="ticket"
            />
            <Feature
              title="تنفيذ متقن"
              description="التزام بالمواعيد، قائمة متطلبات واضحة، وتجربة مريحة لفريق المكان."
              imageSrc={illSpotlight}
              imageAlt="رسم توضيحي لكشاف مسرحي"
              icon="calendar"
            />
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="glass rounded-3xl p-6 sm:p-8 lg:col-span-1">
              <div className="text-base font-extrabold text-stone-950">
                عروض هذا الموسم
              </div>
              <div className="mt-2 text-sm leading-7 text-stone-700/85">
                ثلاث نكهات مختلفة حسب هدف الحدث: قصة، دراما، أو كوميديا راقية.
              </div>
              <div className="mt-6 grid gap-3 text-sm">
                {[
                  'ليلة على المسرح — قصة + إضاءة',
                  'مرايا المدينة — دراما قصيرة',
                  'ضحكة الستارة — كوميديا راقية',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-red-900/10 bg-white p-4 text-stone-800/85"
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <NavLink className="btn-ghost" to="/العروض">
                  شاهد التفاصيل
                </NavLink>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8 lg:col-span-2">
              <div className="text-base font-extrabold text-stone-950">
                كيف يتم الحجز؟
              </div>
              <div className="mt-4">
                <img
                  src={sectionPhotos.booking}
                  alt="ممثلون على خشبة مسرح أثناء عرض"
                  loading="lazy"
                  decoding="async"
                  className="h-36 w-full rounded-3xl border border-red-900/10 object-cover"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { n: '01', t: 'حدد العرض والمدة', d: 'نقترح أنسب خيار حسب الجمهور.' },
                  {
                    n: '02',
                    t: 'حدد المكان والتاريخ',
                    d: 'نراجع القياسات والمتطلبات سريعًا.',
                  },
                  {
                    n: '03',
                    t: 'تأكيد وتجهيز',
                    d: 'قائمة صوت/إضاءة + جدول تنفيذ.',
                  },
                  { n: '04', t: 'ليلة العرض', d: 'تنفيذ منظم وتجربة سلسة.' },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-3xl border border-red-900/10 bg-white p-6"
                  >
                    <div className="text-xs font-extrabold text-red-900/70">
                      {s.n}
                    </div>
                    <div className="mt-2 text-sm font-extrabold text-stone-950">
                      {s.t}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-stone-700/85">
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>
              <div id="عرض" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <NavLink className="btn-primary" to="/تواصل">
                  <Icon name="chat" />
                  اطلب تسعيرًا خلال 24 ساعة
                </NavLink>
                <a className="btn-ghost" href="#الباقات">
                  <Icon name="ticket" />
                  شاهد الباقات
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="الباقات" className="relative z-10 border-t border-red-900/10">
        <div className="container-shell py-14 sm:py-20">
          <SectionMedia
            src={sectionPhotos.pricing}
            alt="جمهور في مسرح وإضاءة العرض"
            icon="ticket"
            caption="باقات مرنة — حسب المكان والمدينة"
          />

          <SectionTitle
            title="باقات مناسبة للفعاليات"
            subtitle="أسعار مبدئية قابلة للتخصيص حسب المدينة والمكان وعدد الأفراد ومتطلبات الصوت/الإضاءة."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PriceCard
              title="باقة كلاسيك"
              price="مناسبة لفعاليات صغيرة — 45 دقيقة"
              items={['عرض واحد', 'تنسيق متطلبات المكان', 'إدارة يوم العرض']}
            />
            <PriceCard
              title="باقة بريميوم"
              price="الخيار الأفضل — 55–60 دقيقة"
              items={[
                'عرض + تخصيص بسيط في النص',
                'خطة إضاءة/موسيقى',
                'تنفيذ كامل + مدير مسرح',
              ]}
              featured
            />
            <PriceCard
              title="باقة مهرجان"
              price="مناسبة لموسم/سلسلة عروض"
              items={[
                'عدة عروض خلال فترة',
                'جدولة وتنسيق لوجستي',
                'تقارير ما بعد التنفيذ',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-red-900/10">
        <div className="container-shell py-14 sm:py-20">
          <SectionMedia
            src={sectionPhotos.testimonials}
            alt="تصفيق وإضاءة مسرح بعد نهاية عرض"
            icon="spark"
            caption="انطباعات حقيقية — أثر واضح"
          />

          <SectionTitle
            title="قالوا عن سِتارة"
            subtitle="تقييمات مختصرة من عملاء فعاليات مختلفة."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-3xl p-6 sm:p-8">
                <div className="text-sm leading-8 text-stone-800/85">
                  “{t.quote}”
                </div>
                <div className="mt-4 text-xs font-extrabold text-red-900/70">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-red-900/10">
        <div className="container-shell py-14 sm:py-20">
          <SectionMedia
            src={sectionPhotos.faqs}
            alt="ستارة مسرح وإضاءة خلفية"
            icon="chat"
            caption="أسئلة سريعة — قبل ما نبدأ"
          />

          <SectionTitle
            title="أسئلة شائعة"
            subtitle="إجابات سريعة قبل طلب التسعير."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="mt-10 glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-2xl font-black tracking-tight text-stone-950">
                  جاهز لليلة عرض لا تُنسى؟
                </div>
                <div className="mt-2 text-sm leading-7 text-stone-700/85">
                  ارسل تفاصيل الحدث، ونرجع لك بتصور وتسعير مناسب خلال 24 ساعة.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <NavLink className="btn-primary" to="/تواصل">
                  <Icon name="chat" />
                  اطلب عرض سعر
                </NavLink>
                <NavLink className="btn-ghost" to="/العروض">
                  <Icon name="ticket" />
                  اختر عرضًا
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionPage>
  )
}

