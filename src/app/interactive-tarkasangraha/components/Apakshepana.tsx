'use client';

import React from 'react';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Apakshepana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'अधोदेशसंयोगहेतुरपक्षेपणम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <ArrowDownward style={{ fontSize: '48px', color: 'teal' }} />,
      title: 'Nature',
      content: 'Downward motion - the cause of conjunction with a lower region.'
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
