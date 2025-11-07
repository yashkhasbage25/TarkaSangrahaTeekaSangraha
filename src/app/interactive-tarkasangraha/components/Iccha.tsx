'use client';

import React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Iccha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'इच्छा कामः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <FavoriteBorder style={{ fontSize: '48px', color: 'blue' }} />,
      title: 'Nature',
      content: 'Desire or wish. The quality of wanting or longing for something.'
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
