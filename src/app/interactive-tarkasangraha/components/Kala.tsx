'use client';

import React from 'react';
import AccessTime from '@mui/icons-material/AccessTime';
import AllInclusive from '@mui/icons-material/AllInclusive';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Kala({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'अतीतादिव्यवहारहेतुः कालः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <AccessTime style={{ fontSize: '48px', color: 'brown' }} />,
      title: 'Function',
      content: 'Time is the cause of temporal distinctions like past, present, and future.'
    },
    {
      icon: <AllInclusive style={{ fontSize: '48px', color: 'brown' }} />,
      title: 'Properties',
      content: 'स चैको विभुर्नित्यश्च - It is one, all-pervading, and eternal.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
