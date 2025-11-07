'use client';

import React from 'react';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Prayatna({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'कृतिः प्रयत्नः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <DirectionsRun style={{ fontSize: '48px', color: 'orange' }} />,
      title: 'Nature',
      content: 'Effort or volition. The quality of exertion or endeavor.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'आत्ममात्रवृत्तिः - Found only in the soul (Atma).'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
