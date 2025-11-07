'use client';

import React from 'react';
import UnfoldMore from '@mui/icons-material/UnfoldMore';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Prasarana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'विप्रकृष्टसंयोगहेतुः प्रसारणम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <UnfoldMore style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Nature',
      content: 'Extension - the cause of conjunction with a region far from the body.'
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
