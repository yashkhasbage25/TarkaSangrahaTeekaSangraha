import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import BlogContent from './BlogContent';

interface BlogFrontmatter {
  title: string;
  titleEn: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image: string;
}

function parseFrontmatter(content: string): { frontmatter: BlogFrontmatter; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      frontmatter: {
        title: '',
        titleEn: '',
        date: '',
        author: '',
        excerpt: '',
        tags: [],
        image: '',
      },
      body: content,
    };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  // Simple YAML-like parsing
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    
    // Handle quoted strings
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      frontmatter[key] = arrayContent.split(',').map(item => {
        item = item.trim();
        if (item.startsWith('"') && item.endsWith('"')) {
          return item.slice(1, -1);
        }
        return item;
      });
    } else {
      frontmatter[key] = value;
    }
  }

  return {
    frontmatter: frontmatter as BlogFrontmatter,
    body,
  };
}

async function getBlogPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    return { frontmatter, body, slug };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'content', 'blogs');
  
  try {
    const files = fs.readdirSync(blogsDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        slug: file.replace('.md', ''),
      }));
  } catch {
    return [];
  }
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
}
