import fs from 'fs';
import path from 'path';

export interface BlogFrontmatter {
  title: string;
  titleEn: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image: string;
  hidden?: boolean;
}

export interface BlogMeta extends BlogFrontmatter {
  slug: string;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  body: string;
  slug: string;
}

export function parseFrontmatter(content: string): { frontmatter: BlogFrontmatter; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  const emptyFm: BlogFrontmatter = {
    title: '',
    titleEn: '',
    date: '',
    author: '',
    excerpt: '',
    tags: [],
    image: '',
    hidden: false,
  };

  if (!match) {
    return { frontmatter: emptyFm, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  const frontmatter: Record<string, unknown> = {};
  const lines = frontmatterStr.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      frontmatter[key] = arrayContent.split(',').map((item) => {
        item = item.trim();
        if (item.startsWith('"') && item.endsWith('"')) {
          return item.slice(1, -1);
        }
        return item;
      });
    } else if (value === 'true' || value === 'false') {
      frontmatter[key] = value === 'true';
    } else {
      frontmatter[key] = value;
    }
  }

  return {
    frontmatter: { ...emptyFm, ...frontmatter } as BlogFrontmatter,
    body,
  };
}

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs');

export function getAllBlogs(): BlogMeta[] {
  try {
    const files = fs.readdirSync(BLOGS_DIR);
    const blogs: BlogMeta[] = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        const content = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf-8');
        const { frontmatter } = parseFrontmatter(content);
        return { ...frontmatter, slug };
      })
      .filter((blog) => !blog.hidden)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    return blogs;
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    return { frontmatter, body, slug };
  } catch {
    return null;
  }
}
