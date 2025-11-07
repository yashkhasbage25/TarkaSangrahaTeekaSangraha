'use client';

import React from 'react';
import UnfoldLess from '@mui/icons-material/UnfoldLess';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Akunchana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'शरीरसंनिकृष्टसंयोगहेतुराकुञ्चनम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <UnfoldLess style={{ fontSize: '48px', color: 'orange' }} />,
      title: 'Nature',
      content: 'Contraction - the cause of conjunction with a region near the body.'
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
