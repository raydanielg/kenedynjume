import { TestimonialShots } from "@/components/testimonial-shots"
import { Reveal } from "@/components/reveal"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-white">
      {/* Real WhatsApp testimonials */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
            Shuhuda halisi — moja kwa moja WhatsApp
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
            Anayefuata kutoa shuhuda ni wewe!
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ash sm:text-lg">
            Wasomaji wanaotumia mbinu za kitabu hiki kufunga deals — hizi ni
            screenshots halisi za ujumbe wao.
          </p>
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <TestimonialShots />
        </div>
      </div>
    </section>
  )
}
