import { MotionPage } from '../components/MotionPage.jsx'

function Bullet({ title, desc }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-sm font-extrabold text-stone-950">{title}</div>
      <div className="mt-2 text-sm leading-7 text-stone-700/80">{desc}</div>
    </div>
  )
}

export function AboutPage() {
  return (
    <MotionPage>
      <section className="relative z-10">
        <div className="container-shell py-14 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
              نبذة عن “سِتارة”
            </h1>
            <p className="mt-4 text-base leading-8 text-stone-800/80">
              “سِتارة” فريق عروض مسرحية يُقدّم تجارب حيّة بلمسة كلاسيكية: نص واضح،
              إيقاع مضبوط، وتنفيذ منظم يناسب الفعاليات والمؤتمرات والمساحات
              الثقافية.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Bullet
              title="خبرة على المسرح"
              desc="من أول بروفة إلى ليلة العرض: إدارة وقت، حركة، وإيقاع يحافظ على انتباه الجمهور."
            />
            <Bullet
              title="عروض قابلة للتخصيص"
              desc="نضبط المدة والمحتوى حسب رسالة الحدث، نوع الجمهور، وطبيعة المكان."
            />
            <Bullet
              title="تنسيق لوجستي واضح"
              desc="قائمة متطلبات للصوت/الإضاءة، تنسيق مع المكان، وفريق جاهز للتنفيذ."
            />
          </div>
        </div>
      </section>
    </MotionPage>
  )
}

