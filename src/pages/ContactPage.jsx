import { useMemo, useState } from 'react'
import { MotionPage } from '../components/MotionPage.jsx'

function Field({ label, children }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-semibold text-stone-800/80">{label}</span>
      {children}
    </label>
  )
}

function Input(props) {
  return (
    <input
      {...props}
      className={[
        'h-11 w-full rounded-xl border border-red-900/10 bg-white px-4 text-sm text-stone-900 outline-none',
        'placeholder:text-stone-500/60 focus:border-red-700/40 focus:ring-2 focus:ring-red-700/15',
      ].join(' ')}
    />
  )
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        'min-h-28 w-full resize-none rounded-xl border border-red-900/10 bg-white px-4 py-3 text-sm text-stone-900 outline-none',
        'placeholder:text-stone-500/60 focus:border-red-700/40 focus:ring-2 focus:ring-red-700/15',
      ].join(' ')}
    />
  )
}

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    budget: 'متوسط',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const summary = useMemo(() => {
    const lines = [
      `الاسم: ${form.name || '-'}`,
      `الجهة: ${form.org || '-'}`,
      `البريد: ${form.email || '-'}`,
      `الميزانية: ${form.budget || '-'}`,
      `الرسالة: ${form.message || '-'}`,
    ]
    return lines.join('\n')
  }, [form])

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <MotionPage>
      <section className="relative z-10">
        <div className="container-shell py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
                تواصل
              </h1>
              <p className="mt-3 text-sm leading-7 text-stone-700/85">
                اكتب تفاصيل الحدث (المكان/التاريخ/المدة/نوع الجمهور) وسنرجع لك
                بتصور وتسعير مناسب.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="اسمك">
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="مثال: يوسف"
                      required
                    />
                  </Field>
                  <Field label="الجهة / الشركة">
                    <Input
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="مثال: شركة X"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="البريد الإلكتروني">
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      required
                    />
                  </Field>
                  <Field label="الميزانية">
                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      className="h-11 w-full rounded-xl border border-red-900/10 bg-white px-4 text-sm text-stone-900 outline-none focus:border-red-700/40 focus:ring-2 focus:ring-red-700/15"
                    >
                      <option className="bg-white" value="محدودة">
                        محدودة
                      </option>
                      <option className="bg-white" value="متوسط">
                        متوسط
                      </option>
                      <option className="bg-white" value="مرن">
                        مرن
                      </option>
                    </select>
                  </Field>
                </div>

                <Field label="ماذا تريد أن يخرج الجمهور به؟">
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="مثال: عرض لمدة 45–60 دقيقة، يحكي قصة تحفيزية لفعالية سنوية..."
                    required
                  />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button type="submit" className="btn-primary">
                    إرسال
                  </button>
                  <a
                    className="btn-ghost"
                    href={`mailto:hello@example.com?subject=${encodeURIComponent(
                      'طلب عرض مسرحي',
                    )}&body=${encodeURIComponent(summary)}`}
                  >
                    إرسال عبر الإيميل
                  </a>
                  {sent ? (
                    <span className="text-sm font-semibold text-emerald-700">
                      تم استلام طلبك — سنرد خلال 24 ساعة.
                    </span>
                  ) : null}
                </div>
              </form>
            </div>

            <aside className="glass rounded-3xl p-6 sm:p-8">
              <div className="text-base font-extrabold text-stone-950">
                تفاصيل سريعة
              </div>
              <div className="mt-4 grid gap-3 text-sm text-stone-700/85">
                <div className="rounded-2xl border border-red-900/10 bg-white p-4">
                  <div className="text-xs font-semibold text-stone-700/70">
                    زمن الرد
                  </div>
                  <div className="mt-1 font-extrabold text-stone-950">
                    خلال 24 ساعة
                  </div>
                </div>
                <div className="rounded-2xl border border-red-900/10 bg-white p-4">
                  <div className="text-xs font-semibold text-stone-700/70">
                    التسليم
                  </div>
                  <div className="mt-1 font-extrabold text-stone-950">
                    نسخة أولى خلال 3–5 أيام
                  </div>
                </div>
                <div className="rounded-2xl border border-red-900/10 bg-white p-4">
                  <div className="text-xs font-semibold text-stone-700/70">
                    المخرجات
                  </div>
                  <div className="mt-1 font-extrabold text-stone-950">
                    عرض + تنسيق + تنفيذ
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </MotionPage>
  )
}

