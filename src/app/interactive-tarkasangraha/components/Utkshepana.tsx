'use client';

import React from 'react';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Utkshepana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'ऊर्ध्वदेशसंयोगहेतुरुत्क्षेपणम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <ArrowUpward style={{ fontSize: '48px', color: 'blue' }} />,
      title: 'Nature',
      content: 'Upward motion - the cause of conjunction with an upper region.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'पृथिव्यादिचतुष्टयमनोमात्रवृत्ति - Found in earth, water, fire, air, and mind.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
