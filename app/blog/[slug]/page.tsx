import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { BLOG_POSTS, getPost } from "@/lib/blog-posts"
import { WhatsAppButton } from "@/components/whatsapp-button"

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "")

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Kenedy Njume"],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        inLanguage: "sw",
        author: {
          "@type": "Person",
          name: "Kenedy Njume",
          url: `${SITE_URL}/#about-kenedy`,
        },
        publisher: {
          "@type": "Organization",
          name: "High Return Consulting",
        },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE_URL}/blog/${post.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <main className="bg-white text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <nav aria-label="Breadcrumb" className="text-xs text-ash">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="hover:text-navy">
            Blog
          </Link>{" "}
          / <span className="text-ink">{post.title}</span>
        </nav>

        <h1 className="mt-6 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.15em] text-ash uppercase">
          Kenedy Njume ·{" "}
          {new Date(post.datePublished).toLocaleDateString("sw-TZ", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime} read
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ash sm:text-lg">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="pt-4 text-xl font-bold tracking-tight text-ink sm:text-2xl"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }
            return <p key={i}>{block.text}</p>
          })}
        </div>

        {/* Book CTA */}
        <aside className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div className="relative h-28 w-24 shrink-0">
            <Image
              src="/images/book-cover-removebg-preview.png"
              alt="20 Objections That Cost You Sales by Kenedy Njume"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold tracking-wide uppercase">
              Chukua hatua inayofuata
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Makala hii ni sehemu tu — kitabu kina majibu ya objections 20
              zote, hatua kwa hatua. TSh 30,000.
            </p>
            <div className="mt-4">
              <WhatsAppButton
                label="Agiza Kitabu — TSh 30,000"
                variant="light"
                icon="whatsapp"
                buttonLocation={`blog-${post.slug}`}
              />
            </div>
          </div>
        </aside>

        {/* Author */}
        <div className="mt-12 flex items-center gap-4 border-t border-line pt-8">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
            <Image
              src="/images/kenedy-portrait.webp"
              alt="Kenedy Njume akitoa mafunzo ya sales"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-ink">Kenedy Njume</p>
            <p className="text-xs text-ash">
              Sales Trainer | Entrepreneur | Founder, High Return Consulting
            </p>
          </div>
        </div>

        {/* Related */}
        <div className="mt-14">
          <h2 className="text-lg font-bold tracking-tight text-ink">
            Makala zinazohusiana
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                  <span className="underline-offset-4 group-hover:underline">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  )
}
