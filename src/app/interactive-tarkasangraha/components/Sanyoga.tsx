'use client';

import React from 'react';
import Link from '@mui/icons-material/Link';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Sanyoga({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'संयुक्तव्यवहारहेतुः संयोगः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Link style={{ fontSize: '48px', color: 'red' }} />,
      title: 'Nature',
      content: 'The cause of the notion of conjunction or connection between substances.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'सर्वद्रव्यवृत्तिः - Found in all substances.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
