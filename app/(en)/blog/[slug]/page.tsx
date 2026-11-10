import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/site/blog";
import { POSTS, getPost } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    locale: "en",
    path: `/blog/${post.slug}`,
    localized: false,
    type: "article",
    title: `${post.title} | GiGa FliX IPTV`,
    description: post.description,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
