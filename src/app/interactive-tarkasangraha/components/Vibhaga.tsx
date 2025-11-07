'use client';

import React from 'react';
import LinkOff from '@mui/icons-material/LinkOff';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Vibhaga({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'संयोगनाशको गुणो विभागः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <LinkOff style={{ fontSize: '48px', color: 'green' }} />,
      title: 'Nature',
      content: 'The quality that destroys conjunction or causes separation.'
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
