'use client';

import React from 'react';
import CallSplit from '@mui/icons-material/CallSplit';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Prithaktva({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'पृथग्व्यवहारासाधारणकारणं पृथक्त्वम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <CallSplit style={{ fontSize: '48px', color: 'yellow' }} />,
      title: 'Nature',
      content: 'The unique cause of the notion of separateness or distinctness.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'सर्वद्रव्यवृत्ति - Found in all substances.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
