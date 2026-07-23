"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { BLOG_POSTS } from "./data";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div>
      <PageHeader
        eyebrow="Stories & Perspectives"
        title="Our Blog"
        img="/assets/photos/img-4299.jpg"
        intro="Reflections on inclusion, advocacy and the children at the heart of our work."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-0 border border-[color:var(--border-default)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-shadow no-underline mb-12"
        >
          <div
            className="min-h-[300px] md:min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredPost.img})` }}
          />
          <div className="p-8 md:p-11 flex flex-col justify-center gap-4">
            <span className="self-start inline-flex font-heading font-semibold text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)]">
              Featured · {featuredPost.tag}
            </span>
            <h2 className="m-0 font-display font-extrabold text-[24px] md:text-[30px] leading-[1.2] text-[color:var(--text-strong)] group-hover:text-[color:var(--color-primary)] transition-colors">
              {featuredPost.title}
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.7] text-[color:var(--text-body)]">
              {featuredPost.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 font-heading font-bold text-[14px] text-[color:var(--color-primary)] mt-2">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <ProgramCard
              key={post.slug}
              image={post.img}
              badge={post.tag}
              badgeTone={post.tone}
              title={post.title}
              description={post.excerpt}
              linkLabel="Read more"
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
