const OBJECTIONS = [
  "“Bei yenu iko juu.”",
  "“Nitakurudia.”",
  "“Tuna supplier mwingine.”",
  "“Ngoja nikafikirie.”",
  "“Ngoja niongee na mume/mke wangu.”",
  "Na nyinginezo?",
]

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-line bg-white">
      <div className="mx-auto max-w-[900px] px-4 pt-16 pb-14 sm:px-6 lg:pt-24 lg:pb-20">
        <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.18] font-extrabold tracking-tight text-navy uppercase">
          Je, ni wateja wangapi umepoteza kwa sababu ya objections hizi?
        </h1>

        <ul className="mt-7 space-y-2 text-lg leading-relaxed text-ink sm:text-xl">
          {OBJECTIONS.map((o) => (
            <li key={o} className="flex gap-3">
              <span
                aria-hidden
                className="mt-3 size-1.5 shrink-0 rounded-full bg-navy"
              />
              {o}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xl font-semibold leading-snug text-ink sm:text-2xl">
          Je, utaendelea kupoteza au utachagua kuzifanya objections zisiwe
          kikwazo tena?
        </p>
      </div>
    </section>
  )
}
