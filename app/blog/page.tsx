import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { BLOG_POSTS } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Makala za Mauzo — Sales Tips na Objection Handling",
  description:
    "Makala za vitendo kuhusu sales objection handling, kujibu wateja, kufunga deals na kuongeza mauzo — na Kenedy Njume.",
  alternates: { canonical: "/blog" },
}

export default function BlogIndex() {
  return (
    <main className="bg-white text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
          Blog — Sales Objection Handling
        </p>
        <h1 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl">
          Makala za Mauzo
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ash sm:text-lg">
          Mbinu za vitendo za kushughulikia objections za wateja na kufunga
          deals zaidi — kutoka kwa Kenedy Njume, mwandishi wa{" "}
          <em>20 Objections That Cost You Sales</em>.
        </p>

        <ul className="mt-12 divide-y divide-line border-t border-b border-line">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 py-6"
              >
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-navy sm:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ash">
                    {post.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.15em] text-ash/70 uppercase">
                    {new Date(post.datePublished).toLocaleDateString("sw-TZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.readTime}
                  </p>
                </div>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="mt-1.5 size-5 shrink-0 text-ash transition-all group-hover:translate-x-1 group-hover:text-navy"
                  strokeWidth={2}
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ash">
          <Link href="/" className="font-medium text-navy underline underline-offset-4">
            ← Rudi kwenye ukurasa wa kitabu
          </Link>
        </p>
      </div>
    </main>
  )
}
