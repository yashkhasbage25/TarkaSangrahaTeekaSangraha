'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Paper, Typography } from '@mui/material';
import { Eczar } from 'next/font/google';
import { BlogMeta } from './blogs';

const eczarBold = Eczar({ weight: '700', subsets: ['devanagari'] });
const eczarLight = Eczar({ weight: '400', subsets: ['devanagari'] });

export default function BlogList({ blogs }: { blogs: BlogMeta[] }) {
  return (
    <Box className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <Box className="max-w-6xl mx-auto">
        {/* Header */}
        <Box className="text-center mb-12">
          <Typography className={`${eczarBold.className} text-white text-5xl mb-4`}>
            ॥ लेखाः ॥
          </Typography>
          <Typography className={`${eczarLight.className} text-gray-300 text-xl`}>
            न्यायदर्शनविषयकाः लेखाः
          </Typography>
          <Typography className="text-gray-400 text-lg mt-2">
            Articles on Nyāya Philosophy
          </Typography>
        </Box>

        {/* Blog Grid */}
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/lekhah/${blog.slug}`} key={blog.slug}>
              <Paper
                elevation={4}
                className="h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gray-100"
              >
                {/* Image */}
                {blog.image && (
                  <Box className="relative h-48 w-full">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </Box>
                )}

                {/* Content */}
                <Box className="p-6">
                  <Typography className={`${eczarBold.className} text-2xl text-gray-800 mb-1`}>
                    {blog.title}
                  </Typography>
                  <Typography className="text-gray-600 text-sm mb-3">{blog.titleEn}</Typography>
                  <Typography className="text-gray-500 text-xs mb-3">
                    {blog.date
                      ? new Date(blog.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : ''}
                  </Typography>
                  <Typography
                    className={`${eczarLight.className} text-gray-700 text-sm line-clamp-3`}
                  >
                    {blog.excerpt}
                  </Typography>

                  {/* Tags */}
                  <Box className="flex flex-wrap gap-2 mt-4">
                    {blog.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
