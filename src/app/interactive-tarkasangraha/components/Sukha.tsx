'use client';

import React from 'react';
import SentimentSatisfiedAlt from '@mui/icons-material/SentimentSatisfiedAlt';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Sukha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'सर्वेषामनुकूलतया वेदनीयं सुखम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <SentimentSatisfiedAlt style={{ fontSize: '48px', color: 'red' }} />,
      title: 'Nature',
      content: 'That which is experienced as agreeable or pleasant by all.'
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
