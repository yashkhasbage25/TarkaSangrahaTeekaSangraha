'use client';

import React from 'react';
import Explore from '@mui/icons-material/Explore';
import AllInclusive from '@mui/icons-material/AllInclusive';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Dik({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'प्राच्यादिव्यवहारहेतुर्दिक्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Explore style={{ fontSize: '48px', color: 'darkgreen' }} />,
      title: 'Function',
      content: 'Direction is the cause of spatial distinctions like east, west, etc.'
    },
    {
      icon: <AllInclusive style={{ fontSize: '48px', color: 'darkgreen' }} />,
      title: 'Properties',
      content: 'सा चैका विभ्वी नित्या च - It is one, all-pervading, and eternal.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
