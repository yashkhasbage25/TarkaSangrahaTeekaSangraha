import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import BlogContent from './BlogContent';
import { getBlogPost } from '../blogs';

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'content', 'blogs');

  try {
    const files = fs.readdirSync(blogsDir);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        slug: file.replace('.md', ''),
      }));
  } catch {
    return [];
  }
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
}
