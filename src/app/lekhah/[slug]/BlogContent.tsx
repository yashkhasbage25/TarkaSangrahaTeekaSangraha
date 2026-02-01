'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Eczar } from 'next/font/google';

const eczarBold = Eczar({ weight: "700", subsets: ["devanagari"] });
const eczarLight = Eczar({ weight: "400", subsets: ["devanagari"] });

interface BlogFrontmatter {
  title: string;
  titleEn: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image: string;
}

interface BlogPost {
  frontmatter: BlogFrontmatter;
  body: string;
  slug: string;
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-800">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800 border-b border-gray-300 pb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">$1</h1>');

  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="my-6 rounded-lg max-w-full h-auto mx-auto" />');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-amber-500 pl-4 py-2 my-4 bg-amber-50 italic text-gray-700">$1</blockquote>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm"><code>$1</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 py-0.5 rounded text-sm text-gray-800">$1</code>');

  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(cell => cell.trim());
    if (cells.every(cell => cell.trim().match(/^-+$/))) {
      return ''; // Skip separator row
    }
    const isHeader = !html.includes('<tbody>');
    const cellTag = isHeader ? 'th' : 'td';
    const cellClass = isHeader 
      ? 'border border-gray-300 px-4 py-2 bg-gray-100 font-bold' 
      : 'border border-gray-300 px-4 py-2';
    const row = cells.map(cell => `<${cellTag} class="${cellClass}">${cell.trim()}</${cellTag}>`).join('');
    return `<tr>${row}</tr>`;
  });

  // Wrap table rows
  const tableMatch = html.match(/<tr>.*<\/tr>/g);
  if (tableMatch) {
    const tableContent = tableMatch.join('');
    html = html.replace(/<tr>.*<\/tr>/g, '');
    html = html.replace(/\n\n/, `\n<table class="border-collapse my-6 w-full">${tableContent}</table>\n`);
  }

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="my-8 border-gray-300" />');

  // Lists - unordered
  html = html.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>');
  
  // Lists - ordered
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal">$1</li>');

  // Wrap consecutive list items
  html = html.replace(/(<li class="ml-4 list-disc">.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>');
  html = html.replace(/(<li class="ml-4 list-decimal">.*<\/li>\n?)+/g, '<ol class="my-4 space-y-1">$&</ol>');

  // Paragraphs - wrap remaining text blocks
  html = html.split('\n\n').map(block => {
    if (block.trim() && 
        !block.startsWith('<') && 
        !block.match(/^[#\-\d\|>]/) &&
        !block.includes('```')) {
      return `<p class="my-4 text-gray-700 leading-relaxed">${block.trim()}</p>`;
    }
    return block;
  }).join('\n');

  // Line breaks within paragraphs
  html = html.replace(/\n(?!<)/g, '<br />');

  return html;
}

export default function BlogContent({ post }: { post: BlogPost }) {
  const { frontmatter, body } = post;
  const htmlContent = markdownToHtml(body);

  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4">
      <Box className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/lekhah">
          <Box className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowBackIcon className="mr-2" />
            <span>सर्वे लेखाः (All Articles)</span>
          </Box>
        </Link>

        {/* Article */}
        <Paper elevation={4} className="rounded-xl overflow-hidden">
          {/* Hero Image */}
          {frontmatter.image && (
            <Box className="relative h-64 w-full">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
              />
              <Box className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </Box>
          )}

          {/* Content */}
          <Box className="p-8">
            {/* Title */}
            <Typography className={`${eczarBold.className} text-4xl text-gray-900 mb-2`}>
              {frontmatter.title}
            </Typography>
            <Typography className="text-gray-600 text-xl mb-4">
              {frontmatter.titleEn}
            </Typography>

            {/* Meta */}
            <Box className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">
              <span>
                {new Date(frontmatter.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              {frontmatter.author && (
                <>
                  <span>•</span>
                  <span>{frontmatter.author}</span>
                </>
              )}
            </Box>

            {/* Tags */}
            <Box className="flex flex-wrap gap-2 mb-8">
              {frontmatter.tags?.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </Box>

            {/* Body */}
            <Box 
              className={`${eczarLight.className} prose prose-lg max-w-none`}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </Box>
        </Paper>

        {/* Back to articles */}
        <Box className="text-center mt-8">
          <Link href="/lekhah">
            <span className="text-gray-300 hover:text-white transition-colors">
              ← सर्वे लेखाः प्रति गच्छतु (Back to all articles)
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
