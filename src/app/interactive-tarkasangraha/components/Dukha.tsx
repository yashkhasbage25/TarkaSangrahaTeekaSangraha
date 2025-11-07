'use client';

import React from 'react';
import SentimentDissatisfied from '@mui/icons-material/SentimentDissatisfied';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Dukha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'सर्वेषां प्रतिकूलतया वेदनीयं दुःखम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <SentimentDissatisfied style={{ fontSize: '48px', color: 'green' }} />,
      title: 'Nature',
      content: 'That which is experienced as disagreeable or unpleasant by all.'
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
