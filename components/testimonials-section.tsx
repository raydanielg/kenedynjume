import { TestimonialShots } from "@/components/testimonial-shots"

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:py-20">
        <div>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Anayefuata kutoa shuhuda ni wewe!
          </h2>
        </div>
        <div className="mt-10">
          <TestimonialShots />
        </div>
      </div>
    </section>
  )
}
