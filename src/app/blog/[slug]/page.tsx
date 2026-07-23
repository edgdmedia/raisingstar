import React from "react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <article>
        <header className="max-w-[820px] mx-auto pt-16 pb-8 px-6 text-center flex flex-col items-center gap-5">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-[13.5px] text-[color:var(--color-primary)] hover:opacity-80 transition-opacity no-underline"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            All articles
          </a>
          <span className="inline-flex font-heading font-semibold text-[11px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)]">
            {post.tag}
          </span>
          <h1 className="m-0 font-display font-extrabold text-[clamp(30px,4vw,46px)] leading-[1.14] text-[color:var(--text-strong)] max-w-[760px]">
            {post.title}
          </h1>
          <div className="flex items-center gap-3.5 font-heading text-[14px] text-[color:var(--text-muted)]">
            <span className="inline-flex items-center gap-2 text-[color:var(--text-strong)]">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[color:var(--rsa-teal)] to-[color:var(--rsa-green)] text-white inline-flex items-center justify-center font-display font-extrabold text-[12px]">
                RS
              </span>
              Raising Star Africa
            </span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="max-w-[1000px] mx-auto px-6">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-auto max-h-[520px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="max-w-[720px] mx-auto pt-11 pb-2 px-6 flex flex-col gap-5.5 text-[17.5px] leading-[1.8] text-[color:var(--rsa-ink)]">
          {post.content.map((p, i) => (
            <p key={i} className="m-0">
              {p}
            </p>
          ))}
          <blockquote className="my-2 py-2 pr-0 pl-7 border-l-4 border-[color:var(--rsa-gold)] font-display font-bold text-[24px] leading-[1.4] text-[color:var(--text-strong)]">
            "When every child learns, the whole community grows. No child should be left behind."
          </blockquote>
        </div>

        <div className="max-w-[720px] mx-auto pt-5 pb-2 px-6 flex flex-wrap gap-3">
          <Button variant="donate" href="/donate">
            Support this work
          </Button>
          <Button variant="outline" href="/volunteer">
            Volunteer
          </Button>
        </div>
      </article>

      <section className="bg-[color:var(--rsa-surface)] py-[72px] mt-14">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-9">
            <SectionHeading eyebrow="Keep Reading" title="Related articles" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((r) => (
              <ProgramCard
                key={r.slug}
                image={r.img}
                badge={r.tag}
                badgeTone={r.tone}
                title={r.title}
                description={r.excerpt}
                linkLabel="Read more"
                href={`/blog/${r.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
