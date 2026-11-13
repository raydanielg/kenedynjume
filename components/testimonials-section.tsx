import { TestimonialShots } from "@/components/testimonial-shots"
import { Reveal } from "@/components/reveal"

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Anayefuata kutoa shuhuda ni wewe!
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Wasomaji wanaotumia mbinu za kitabu hiki kufunga deals — hizi ni
            screenshots halisi za ujumbe wao.
          </p>
        </Reveal>
        <div className="mt-10">
          <TestimonialShots />
        </div>
      </div>
    </section>
  )
}
