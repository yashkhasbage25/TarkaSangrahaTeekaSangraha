'use client';

import React from 'react';
import Block from '@mui/icons-material/Block';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Dvesha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'क्रोधो द्वेषः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Block style={{ fontSize: '48px', color: 'teal' }} />,
      title: 'Nature',
      content: 'Aversion or anger. The quality of dislike or hatred towards something.'
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
