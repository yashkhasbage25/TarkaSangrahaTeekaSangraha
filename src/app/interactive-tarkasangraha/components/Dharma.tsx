'use client';

import React from 'react';
import Balance from '@mui/icons-material/Balance';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Dharma({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'विहितकर्मजन्यो धर्मः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Balance style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Nature',
      content: 'Merit or virtue arising from prescribed actions. The quality that leads to happiness and liberation.'
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
